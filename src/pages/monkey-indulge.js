// Thanks ChatGPT, actually tho
import React, { useEffect, useState } from 'react'

const GoodsmileTracker = () => {
  // Add error boundary state
  const [hasError, setHasError] = useState(false);
  
  // Helper functions for localStorage with better error handling
  const getStoredSetting = (key, defaultValue) => {
    if (typeof window === 'undefined') return defaultValue;
    try {
      const stored = localStorage.getItem(`goodsmile-${key}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Handle Set objects (stored as arrays)
        if (key === 'hiddenProducts' && Array.isArray(parsed)) {
          return new Set(parsed);
        }
        return parsed;
      }
      return defaultValue;
    } catch {
      return defaultValue;
    }
  };

  const storeSetting = (key, value) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(`goodsmile-${key}`, JSON.stringify(value));
    } catch (e) {
      console.warn('Could not save setting to localStorage:', e);
    }
  };

  // Frontend configurable values with localStorage persistence
  const [autoReloadEnabled, setAutoReloadEnabled] = useState(() => getStoredSetting('autoReload', false));
  const [percentThreshold, setPercentThreshold] = useState(() => getStoredSetting('percentThreshold', 50));
  const [basePriceThreshold, setBasePriceThreshold] = useState(() => getStoredSetting('basePriceThreshold', 95));
  const [basePriceCeiling, setBasePriceCeiling] = useState(() => getStoredSetting('basePriceCeiling', 300));
  const [refreshDuration, setRefreshDuration] = useState(() => getStoredSetting('refreshDuration', 5)); // in minutes/seconds
  const [refreshUnit, setRefreshUnit] = useState(() => getStoredSetting('refreshUnit', 'minutes'));
  const [scaleFiguresOnly, setScaleFiguresOnly] = useState(() => getStoredSetting('scaleFiguresOnly', true));
  
  // Settings collapse state
  const [settingsCollapsed, setSettingsCollapsed] = useState(() => getStoredSetting('settingsCollapsed', true));
  
  // Track if we've already auto-adjusted the refresh duration
  const [hasAutoAdjustedDuration, setHasAutoAdjustedDuration] = useState(false);
  
  // Hidden products tracking
  const [hiddenProducts, setHiddenProducts] = useState(() => getStoredSetting('hiddenProducts', new Set()));
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [previousProducts, setPreviousProducts] = useState(new Set());
  const [newProducts, setNewProducts] = useState([]);
  
  // Loading progress tracking
  const [loadingProgress, setLoadingProgress] = useState({ currentPage: 0, totalProducts: 0 });
  const [rateLimitInfo, setRateLimitInfo] = useState({ isRateLimited: false, waitTime: 0 });
  
  // Store all products from all pages (before filtering)
  const [allProducts, setAllProducts] = useState([]);
  const [masterDocHtml, setMasterDocHtml] = useState('');
  const [isFromDataReload, setIsFromDataReload] = useState(false);
  const [actualPagesFetched, setActualPagesFetched] = useState(1);
  
  useEffect(() => {
    if (!autoReloadEnabled || loading) return; // Exit early if auto-reload is disabled or still loading
    
    const scheduleNextReload = () => {
      // Determine effective duration based on unit and number of pages fetched
      let effectiveDurationInSeconds;
      
      if (actualPagesFetched > 1 && !hasAutoAdjustedDuration) {
        // Auto-set to 5 minutes if multiple pages were fetched (only once)
        console.log(`Multiple pages fetched (${actualPagesFetched}), automatically setting refresh to 5 minutes`);
        setRefreshDuration(2);
        setRefreshUnit('minutes');
        setHasAutoAdjustedDuration(true);
        effectiveDurationInSeconds = 5 * 60; // 5 minutes
      } else {
        // Use user setting with minimum enforcement
        if (refreshUnit === 'seconds') {
          effectiveDurationInSeconds = Math.max(refreshDuration, 5); // Minimum 5 seconds
        } else {
          effectiveDurationInSeconds = Math.max(refreshDuration, 1) * 60; // Minimum 1 minute, convert to seconds
        }
      }
      
      const minMs = Math.max(effectiveDurationInSeconds - 5, 5) * 1000;
      const maxMs = (effectiveDurationInSeconds + 5) * 1000;
      const randomInterval = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
      console.log(`Next reload in ${randomInterval / 1000} seconds (${effectiveDurationInSeconds}s ±5s)`);
      
      const timeout = setTimeout(() => {
        window.location.reload();  // Reloads the page
      }, randomInterval);
      
      return timeout;
    };
    
    // Schedule the first reload
    const timeout = scheduleNextReload();

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [autoReloadEnabled, refreshDuration, refreshUnit, allProducts, loading, hasAutoAdjustedDuration, actualPagesFetched]);

  // Save settings to localStorage when they change
  useEffect(() => {
    storeSetting('autoReload', autoReloadEnabled);
  }, [autoReloadEnabled]);

  useEffect(() => {
    storeSetting('percentThreshold', percentThreshold);
  }, [percentThreshold]);

  useEffect(() => {
    storeSetting('basePriceThreshold', basePriceThreshold);
  }, [basePriceThreshold]);

  useEffect(() => {
    storeSetting('basePriceCeiling', basePriceCeiling);
  }, [basePriceCeiling]);

  useEffect(() => {
    storeSetting('refreshDuration', refreshDuration);
  }, [refreshDuration]);

  useEffect(() => {
    storeSetting('refreshUnit', refreshUnit);
  }, [refreshUnit]);

  useEffect(() => {
    storeSetting('scaleFiguresOnly', scaleFiguresOnly);
  }, [scaleFiguresOnly]);

  useEffect(() => {
    storeSetting('settingsCollapsed', settingsCollapsed);
  }, [settingsCollapsed]);

  useEffect(() => {
    storeSetting('hiddenProducts', Array.from(hiddenProducts));
  }, [hiddenProducts]);

  // Helper function to hide a product
  const hideProduct = (productId) => {
    setHiddenProducts(prev => {
      const newSet = new Set(prev);
      newSet.add(productId);
      return newSet;
    });
  };

  // Helper function to reset hidden products
  const resetHiddenProducts = () => {
    setHiddenProducts(new Set());
  };

  // Request notification permission on component mount with safety checks
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
      }
    } catch (e) {
      console.warn('Notification API not supported:', e);
    }
  }, []);

  useEffect(() => {
    // Function to fetch data from all pages
    const fetchData = async () => {
      let consecutiveErrors = 0; // Move to function scope
      
      try {
        const proxyUrl = 'https://corsproxy.io/?';
        const baseUrl = scaleFiguresOnly 
          ? 'https://www.goodsmileus.com/collections/on-sale?filter.p.product_type=Scale+Figure&sort_by=price-ascending'
          : 'https://www.goodsmileus.com/collections/on-sale?sort_by=price-ascending';
        
        let allProductItems = [];
        let currentPage = 1;
        let hasMorePages = true;
        let masterDoc = null;
        
        console.log('Starting to fetch all pages...');
        
        while (hasMorePages) {
          const targetUrl = currentPage === 1 ? baseUrl : `${baseUrl}&page=${currentPage}`;
          console.log(`Fetching page ${currentPage}...`);
          
          // Update loading progress
          setLoadingProgress({ currentPage, totalProducts: allProductItems.length });
          
          // Add moderate random delay between 2-4 seconds between requests (except for the first page)
          if (currentPage > 1) {
            const randomDelay = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;
            console.log(`Waiting ${randomDelay}ms before next request...`);
            await new Promise(resolve => setTimeout(resolve, randomDelay));
          }
          
          // Add headers to appear more like a real browser
          const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'
          };
          
          const response = await fetch(proxyUrl + encodeURIComponent(targetUrl), { headers });
          
          if (!response.ok) {
            if (response.status === 429 || response.status === 503) {
              console.log(`Rate limited on page ${currentPage}, waiting 30 seconds...`);
              setRateLimitInfo({ isRateLimited: true, waitTime: 30 });
              
              // Countdown timer
              for (let i = 30; i > 0; i--) {
                setRateLimitInfo({ isRateLimited: true, waitTime: i });
                await new Promise(resolve => setTimeout(resolve, 1000));
              }
              
              setRateLimitInfo({ isRateLimited: false, waitTime: 0 });
              // Retry the same page
              continue;
            }
            throw new Error(`Network response was not ok for page ${currentPage}: ${response.status}`);
          }
          
          const htmlText = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlText, 'text/html');
          const productItems = doc.querySelectorAll('li.collection-grid__product');
          
          if (productItems.length === 0) {
            console.log(`No products found on page ${currentPage}, stopping...`);
            hasMorePages = false;
          } else {
            console.log(`Found ${productItems.length} products on page ${currentPage}`);
            
            // Check if any product has a discounted price greater than the ceiling
            let hasProductAboveCeiling = false;
            productItems.forEach((item) => {
              const currentPriceEl = item.querySelector('span.product__price.product__price--current');
              if (currentPriceEl) {
                const currentPrice = parseFloat(currentPriceEl.textContent.replace('$', '').trim());
                if (currentPrice > basePriceCeiling) {
                  hasProductAboveCeiling = true;
                }
              }
            });
            
            console.log(`Page ${currentPage}: ${hasProductAboveCeiling ? 'Has' : 'No'} products above ceiling ($${basePriceCeiling})`);
            
            // Stop fetching if any product on this page exceeds the ceiling
            if (hasProductAboveCeiling) {
              console.log(`Found product(s) above ceiling ($${basePriceCeiling}) on page ${currentPage}, stopping...`);
              hasMorePages = false;
            }
            
            allProductItems = [...allProductItems, ...Array.from(productItems)];
            
            // Update progress with new product count
            setLoadingProgress({ currentPage, totalProducts: allProductItems.length });
            
            // Use the first page as our master document to preserve styling
            if (currentPage === 1) {
              masterDoc = doc;
            }
            
            currentPage++;
          }
        }
        
        console.log(`Total products collected from ${currentPage - 1} pages: ${allProductItems.length}`);
        
        // Store the actual number of pages fetched
        setActualPagesFetched(currentPage - 1);
        
        // Create a clean document with only the essential structure
        const cleanDoc = new DOMParser().parseFromString(`
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>Goodsmile Tracker</title>
          </head>
          <body>
            <div class="collection-grid"></div>
          </body>
          </html>
        `, 'text/html');
        
        // Copy any CSS from the original document
        const originalStyles = masterDoc.querySelectorAll('style, link[rel="stylesheet"]');
        originalStyles.forEach(style => {
          cleanDoc.head.appendChild(cleanDoc.importNode(style, true));
        });
        
        // Use the clean document as our master
        masterDoc = cleanDoc;
        
        // Process and store all products with their data
        const processedProducts = [];
        
        allProductItems.forEach((item) => {
          // Import the item into the master document
          const importedItem = masterDoc.importNode(item, true);
          // Get original price (strikethrough price) from the imported item
          const originalPriceEl = importedItem.querySelector('s.product-card__price.product__price--compare');
          // Get current price (red price) from the imported item
          const currentPriceEl = importedItem.querySelector('span.product__price.product__price--current');
          
          if (originalPriceEl && currentPriceEl) {
            const originalPrice = parseFloat(originalPriceEl.textContent.replace('$', '').trim());
            const currentPrice = parseFloat(currentPriceEl.textContent.replace('$', '').trim());
            const percentDecrease = ((originalPrice - currentPrice) / originalPrice) * 100;
            
            // Get product identifier for tracking
            const titleEl = importedItem.querySelector('a.product-card__title-link');
            const productTitle = titleEl ? titleEl.textContent.trim() : '';
            
            processedProducts.push({
              element: importedItem,
              originalPrice,
              currentPrice,
              percentDecrease,
              title: productTitle,
              productId: `${productTitle}-${originalPrice}-${currentPrice}`
            });
          }
        });
        
        // Store all processed products
        setAllProducts(processedProducts);
        setMasterDocHtml(masterDoc.documentElement.outerHTML);
        
        // Mark this as coming from a data reload (not settings change)
        setIsFromDataReload(true);
        
        // Apply filtering with current thresholds
        applyFiltering(processedProducts, masterDoc);

      } catch (err) {
        console.log('Fetch error:', err);
        if (err.message.includes('429') || err.message.includes('503')) {
          consecutiveErrors++;
          const backoffDelay = Math.min(60000, 5000 * Math.pow(2, consecutiveErrors));
          const backoffSeconds = Math.ceil(backoffDelay/1000);
          console.log(`Rate limit error, backing off for ${backoffDelay}ms`);
          setError(`Rate limited. Retrying in ${backoffSeconds} seconds...`);
          setRateLimitInfo({ isRateLimited: true, waitTime: backoffSeconds });
          
          // Countdown timer for backoff
          for (let i = backoffSeconds; i > 0; i--) {
            setRateLimitInfo({ isRateLimited: true, waitTime: i });
            setError(`Rate limited. Retrying in ${i} seconds...`);
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
          
          window.location.reload();
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [scaleFiguresOnly]); // Re-fetch when Scale Figures filter changes

  // Function to apply filtering without re-fetching
  const applyFiltering = (products, doc) => {
    const cleanContainer = doc.querySelector('.collection-grid');
    if (!cleanContainer) return;
    
    // Clear container
    cleanContainer.innerHTML = '';
    
    let filteredCount = 0;
    const currentProducts = new Set();
    const newProductsFound = [];
    
    products.forEach((product) => {
      // Filter 0: Skip hidden products
      if (hiddenProducts.has(product.productId)) {
        return;
      }
      
      // Filter 1: Original price must be >= threshold AND current price <= ceiling
      if (product.originalPrice >= basePriceThreshold && product.currentPrice <= basePriceCeiling) {
        // Filter 2: Percent decrease must be >= threshold
        if (product.percentDecrease >= percentThreshold) {
          currentProducts.add(product.productId);
          
          // Check if this is a new product - only if this filtering came from a data reload, not settings change
          if (isFromDataReload && previousProducts.size > 0 && !previousProducts.has(product.productId)) {
            newProductsFound.push({
              title: product.title,
              originalPrice: product.originalPrice,
              currentPrice: product.currentPrice,
              percentDecrease: Math.round(product.percentDecrease)
            });
          }
          
          // Clone the element for modification
          const itemToAdd = doc.importNode(product.element, true);
          
          // Keep this item and add discount percentage
          const priceContainer = itemToAdd.querySelector('.product-card__price-container');
          if (priceContainer) {
            // Create discount percentage element
            const discountEl = doc.createElement('div');
            discountEl.style.cssText = 'background-color: #dc2626; color: white; padding: 8px; border-radius: 4px; margin-top: 8px; font-weight: bold; text-align: center; font-size: 16px;';
            discountEl.textContent = `${Math.round(product.percentDecrease)}% OFF - Save $${(product.originalPrice - product.currentPrice).toFixed(2)}`;
            priceContainer.appendChild(discountEl);
          }
          
          // Fix all links to point to goodsmileus.com
          const allLinks = itemToAdd.querySelectorAll('a');
          let productUrl = '';
          
          allLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('/')) {
              const fullUrl = `https://www.goodsmileus.com${href}`;
              link.setAttribute('href', fullUrl);
              link.setAttribute('target', '_blank');
              link.setAttribute('rel', 'noopener noreferrer');
              
              // Store the product URL for the Buy Now button
              if (href.includes('/products/') && !productUrl) {
                productUrl = fullUrl;
              }
            }
          });
          
          // Convert Buy Now button to a link
          const buyNowButton = itemToAdd.querySelector('button.product-card__quickadd-atc');
          if (buyNowButton && productUrl) {
            // Create a new link element with the same styling as the button
            const buyNowLink = doc.createElement('a');
            buyNowLink.href = productUrl;
            buyNowLink.target = '_blank';
            buyNowLink.rel = 'noopener noreferrer';
            buyNowLink.className = buyNowButton.className;
            buyNowLink.style.cssText = 'text-decoration: none; display: block; text-align: center;';
            buyNowLink.textContent = 'Buy Now';
            
            // Replace the button with the link
            buyNowButton.parentNode.replaceChild(buyNowLink, buyNowButton);
          }
          
          // Add Hide button
          const hideButton = doc.createElement('button');
          hideButton.textContent = '✕ Hide';
          hideButton.className = 'goodsmile-hide-btn';
          hideButton.style.cssText = 'background-color: #6b7280; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px; margin-top: 8px; width: 100%; font-weight: bold;';
          hideButton.setAttribute('data-product-id', product.productId);
          
          // Add hide button to price container
          if (priceContainer) {
            priceContainer.appendChild(hideButton);
          }
          
          // Add the filtered item to the clean container
          cleanContainer.appendChild(itemToAdd);
          filteredCount++;
        }
      }
    });
    
    // Handle new products alerts - only if this filtering came from a data reload
    if (isFromDataReload && newProductsFound.length > 0) {
      setNewProducts(newProductsFound);
      
      // Browser notification (if permission granted and supported)
      try {
        if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
          new Notification(`${newProductsFound.length} New Goodsmile Deal${newProductsFound.length > 1 ? 's' : ''}!`, {
            body: newProductsFound.map(p => `${p.title} - ${p.percentDecrease}% OFF`).join('\n'),
            icon: '//www.goodsmileus.com/favicon.ico'
          });
        }
      } catch (e) {
        console.log('Notification failed:', e);
      }
      
      // Console alert
      console.log('🚨 NEW PRODUCTS FOUND:', newProductsFound);
      
      // Audio alert - Metal Gear Solid sounds (with Safari compatibility)
      try {
        if (typeof window !== 'undefined' && 'Audio' in window) {
          console.log('Playing first alert sound...');
          // First sound: tindeck_1
          const audio1 = new Audio('/tindeck_1.mp3');
          audio1.load(); // Preload for Safari
          audio1.play().catch((e) => console.log('First alert audio failed:', e));
          
          // Second sound: untitled_1150 (play after first one ends or after 3 seconds)
          setTimeout(() => {
            console.log('Playing second alert sound...');
            const audio2 = new Audio('/untitled_1150.mp3');
            audio2.load(); // Preload for Safari
            audio2.play().catch((e) => console.log('Second alert audio failed:', e));
          }, 3000);
        }
      } catch (e) {
        console.log('Alert audio error:', e);
      }
    }
    
    // Update previous products for next comparison - only if this filtering came from a data reload
    if (isFromDataReload) {
      setPreviousProducts(currentProducts);
      // Reset the flag after processing
      setIsFromDataReload(false);
    }
    
    // Add minimal CSS to ensure product cards stay a reasonable size while preserving styling
    const styleEl = doc.createElement('style');
    styleEl.textContent = `
      .collection-grid__product {
        width: 280px;
        max-width: 280px;
        margin: 1rem;
      }
      .product-card {
        width: 100%;
        height: auto;
      }
      .product-card__image {
        width: 100%;
        max-width: 100%;
        height: 350px;
        max-height: 350px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      .product-card__image img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        object-position: center center;
      }
      .collection-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
        padding: 1rem;
      }
      
      /* Mobile responsive: Force minimum 2 columns, but allow expansion */
      @media (max-width: 768px) and (min-width: 561px) {
        .collection-grid {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 0.5rem;
          padding: 0.5rem;
        }
      }
      
      /* Narrow mobile: Force exactly 2 columns */
      @media (max-width: 560px) {
        .collection-grid {
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          padding: 0.5rem;
        }
        .collection-grid__product {
          width: 100%;
          max-width: 100%;
          margin: 0;
        }
        .product-card__image {
          height: 250px;
          max-height: 250px;
        }
      }
      
      /* Extra small screens - still force 2 columns */
      @media (max-width: 480px) {
        .collection-grid {
          grid-template-columns: 1fr 1fr;
          gap: 0.25rem;
          padding: 0.25rem;
        }
        .collection-grid__product {
          width: 100%;
          max-width: 100%;
          margin: 0;
        }
        .product-card__image {
          height: 200px;
          max-height: 200px;
        }
      }
      
      /* Very narrow screens - still maintain 2 columns but smaller */
      @media (max-width: 320px) {
        .collection-grid {
          grid-template-columns: 1fr 1fr;
          gap: 0.125rem;
          padding: 0.125rem;
        }
        .product-card__image {
          height: 150px;
          max-height: 150px;
        }
      }
    `;
    doc.head.appendChild(styleEl);
    
    // Get the modified HTML
    const modifiedHtml = doc.documentElement.outerHTML;
    setFilteredProducts([{ modifiedHtml, count: filteredCount }]);
    console.log(`Found ${filteredCount} products matching criteria (≥$${basePriceThreshold}, ≥${percentThreshold}%)`);
  };
  
  // Effect to re-filter when thresholds change (without triggering alerts)
  useEffect(() => {
    if (allProducts.length > 0 && masterDocHtml) {
      // Ensure isFromDataReload is false for settings changes
      setIsFromDataReload(false);
      const doc = new DOMParser().parseFromString(masterDocHtml, 'text/html');
      applyFiltering(allProducts, doc);
    }
  }, [basePriceThreshold, percentThreshold, basePriceCeiling, allProducts, masterDocHtml, hiddenProducts]);

  // Add error boundary
  if (hasError) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
        <h2>Something went wrong</h2>
        <p>The tracker encountered an error. This may be due to browser compatibility.</p>
        <button 
          onClick={() => {
            setHasError(false);
            window.location.reload();
          }}
          style={{ padding: '10px', marginTop: '10px' }}
        >
          Reload Page
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Loading Goodsmile Tracker...</h2>
        {rateLimitInfo.isRateLimited ? (
          <div>
            <p style={{ color: '#dc2626', fontWeight: 'bold' }}>
              ⚠️ Rate Limited - Waiting {rateLimitInfo.waitTime} seconds before retrying...
            </p>
            <div style={{ 
              width: '300px', 
              height: '10px', 
              backgroundColor: '#f3f4f6', 
              borderRadius: '5px',
              margin: '10px auto',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${((30 - rateLimitInfo.waitTime) / 30) * 100}%`,
                height: '100%',
                backgroundColor: '#dc2626',
                transition: 'width 1s linear'
              }} />
            </div>
          </div>
        ) : loadingProgress.currentPage > 0 ? (
          <p>
            Fetching page {loadingProgress.currentPage} - Found {loadingProgress.totalProducts} products so far
          </p>
        ) : (
          <p>Starting to fetch product data...</p>
        )}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Wrap entire render in try-catch for iPhone Safari
  try {
    return (
      <div>
        {/* Controls */}
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          borderBottom: '1px solid #dee2e6'
        }}>
          {/* Settings Header */}
          <div 
            onClick={() => setSettingsCollapsed(!settingsCollapsed)}
            style={{
              padding: '8px 15px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#e9ecef',
              borderBottom: settingsCollapsed ? 'none' : '1px solid #dee2e6'
            }}
          >
            <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>
              Settings & Controls
            </h3>
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
              {settingsCollapsed ? '▶' : '▼'}
            </span>
          </div>
          
          {/* Collapsible Settings Content */}
          {!settingsCollapsed && (
            <div style={{ 
              padding: '12px 15px', 
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
        <div>
          <label style={{ marginRight: '10px' }}>Base Price Threshold: $</label>
          <input 
            type="number" 
            value={basePriceThreshold} 
            onChange={(e) => setBasePriceThreshold(Number(e.target.value))}
            style={{ width: '80px', padding: '5px' }}
          />
        </div>
        
        <div>
          <label style={{ marginRight: '10px' }}>Current Price Ceiling: $</label>
          <input 
            type="number" 
            value={basePriceCeiling} 
            onChange={(e) => setBasePriceCeiling(Number(e.target.value))}
            style={{ width: '80px', padding: '5px' }}
          />
        </div>
        
        <div>
          <label style={{ marginRight: '10px' }}>Discount Threshold: </label>
          <input 
            type="number" 
            value={percentThreshold} 
            onChange={(e) => setPercentThreshold(Number(e.target.value))}
            style={{ width: '60px', padding: '5px' }}
          />%
        </div>
        
        <div>
          <label style={{ marginRight: '10px' }}>Refresh Duration: </label>
          <input 
            type="number" 
            value={refreshDuration} 
            min={refreshUnit === 'seconds' ? "5" : "1"}
            onChange={(e) => {
              const minValue = refreshUnit === 'seconds' ? 5 : 1;
              setRefreshDuration(Math.max(minValue, Number(e.target.value)));
            }}
            style={{ width: '60px', padding: '5px' }}
          />
          <select 
            value={refreshUnit}
            onChange={(e) => {
              setRefreshUnit(e.target.value);
              // Adjust duration if switching units and below minimum
              if (e.target.value === 'seconds' && refreshDuration < 5) {
                setRefreshDuration(5);
              }
            }}
            style={{ marginLeft: '5px', padding: '5px' }}
          >
            <option value="seconds">seconds</option>
            <option value="minutes">minutes</option>
          </select>
        </div>
        
        <div>
          <label style={{ marginRight: '10px' }}>
            <input 
              type="checkbox" 
              checked={autoReloadEnabled}
              onChange={(e) => setAutoReloadEnabled(e.target.checked)}
            />
            Auto Reload
          </label>
        </div>
        
        <div>
          <label style={{ marginRight: '10px' }}>
            <input 
              type="checkbox" 
              checked={scaleFiguresOnly}
              onChange={(e) => setScaleFiguresOnly(e.target.checked)}
            />
            Scale Figures Only (On Next Reload)
          </label>
        </div>
        
        <div>
          <button 
            onClick={() => {
              try {
                if (typeof window !== 'undefined' && 'Audio' in window) {
                  console.log('Playing first sound...');
                  // First sound: tindeck_1
                  const audio1 = new Audio('/tindeck_1.mp3');
                  audio1.load(); // Preload for Safari
                  audio1.play().catch((e) => console.log('First audio failed:', e));
                  
                  // Second sound: untitled_1150 (play after first one ends or after 3 seconds)
                  setTimeout(() => {
                    console.log('Playing second sound...');
                    const audio2 = new Audio('/untitled_1150.mp3');
                    audio2.load(); // Preload for Safari
                    audio2.play().catch((e) => console.log('Second audio failed:', e));
                  }, 3000);
                } else {
                  console.log('Audio not supported in this browser');
                }
              } catch (e) {
                console.log('Audio error:', e);
              }
            }}
            style={{
              padding: '5px 10px',
              backgroundColor: '#0284c7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Test Alert Sound
          </button>
        </div>
        
        <div>
          <button 
            onClick={resetHiddenProducts}
            style={{
              padding: '5px 10px',
              backgroundColor: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Reset Hidden Products ({hiddenProducts.size})
          </button>
        </div>
            </div>
          )}
        </div>

      {/* New Products Alert */}
      {newProducts.length > 0 && (
        <div style={{
          padding: '15px',
          backgroundColor: '#dc2626',
          color: 'white',
          position: 'sticky',
          top: 0,
          zIndex: 101,
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          🚨 {newProducts.length} NEW DEAL{newProducts.length > 1 ? 'S' : ''} FOUND! 🚨
          <button 
            onClick={() => setNewProducts([])}
            style={{
              marginLeft: '15px',
              padding: '5px 10px',
              backgroundColor: 'white',
              color: '#dc2626',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Dismiss
          </button>
        </div>
      )}
      
      {filteredProducts.length > 0 && (
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#f0f9ff', 
          borderBottom: '2px solid #0284c7',
          position: 'sticky',
          top: newProducts.length > 0 ? '60px' : 0,
          zIndex: 100,
          textAlign: 'center'
        }}>
          <h4 style={{ margin: 0, color: '#0284c7' }}>
            Goodsmile Sale Tracker - Found {filteredProducts[0]?.count || 0} products (${basePriceThreshold}-${basePriceCeiling} price range, ≥{percentThreshold}% off)
          </h4>
        </div>
      )}
      
      {filteredProducts.length > 0 ? (
        <div 
          dangerouslySetInnerHTML={{ __html: filteredProducts[0].modifiedHtml }} 
          onClick={(e) => {
            // Handle hide button clicks using event delegation
            if (e.target.classList.contains('goodsmile-hide-btn')) {
              e.preventDefault();
              e.stopPropagation();
              const productId = e.target.getAttribute('data-product-id');
              if (productId) {
                hideProduct(productId);
                // Remove the product card from DOM immediately
                const productCard = e.target.closest('.collection-grid__product');
                if (productCard) {
                  productCard.remove();
                }
              }
            }
          }}
          onMouseOver={(e) => {
            // Handle hover effects for hide buttons
            if (e.target.classList.contains('goodsmile-hide-btn')) {
              e.target.style.backgroundColor = '#374151';
            }
          }}
          onMouseOut={(e) => {
            // Handle hover effects for hide buttons
            if (e.target.classList.contains('goodsmile-hide-btn')) {
              e.target.style.backgroundColor = '#6b7280';
            }
          }}
        />
      ) : (
        !loading && (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <p>No products found matching the criteria (≥$95 original price, ≥50% discount)</p>
          </div>
        )
      )}
    </div>
  );
  } catch (error) {
    console.error('Render error:', error);
    setHasError(true);
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
        <h2>Rendering Error</h2>
        <p>Failed to render the tracker. Please reload the page.</p>
        <button 
          onClick={() => window.location.reload()}
          style={{ padding: '10px', marginTop: '10px' }}
        >
          Reload
        </button>
      </div>
    );
  }
}

export default GoodsmileTracker