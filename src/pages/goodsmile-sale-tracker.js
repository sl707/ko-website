// Thanks ChatGPT, actually tho
import React, { useEffect, useState } from 'react'

const GoodsmileTracker = () => {
  // Helper functions for localStorage
  const getStoredSetting = (key, defaultValue) => {
    try {
      const stored = localStorage.getItem(`goodsmile-${key}`);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  };

  const storeSetting = (key, value) => {
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
  const [refreshDuration, setRefreshDuration] = useState(() => getStoredSetting('refreshDuration', 1)); // in minutes
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [previousProducts, setPreviousProducts] = useState(new Set());
  const [newProducts, setNewProducts] = useState([]);
  
  // Store all products from all pages (before filtering)
  const [allProducts, setAllProducts] = useState([]);
  const [masterDocHtml, setMasterDocHtml] = useState('');
  const [isFromDataReload, setIsFromDataReload] = useState(false);
  
  useEffect(() => {
    if (!autoReloadEnabled) return; // Exit early if auto-reload is disabled
    
    const scheduleNextReload = () => {
      // Convert minutes to seconds, ensure minimum 1 minute, then random interval: duration ±5 seconds
      const durationInSeconds = Math.max(refreshDuration, 1) * 60; // Ensure minimum 1 minute
      const minMs = (durationInSeconds - 5) * 1000;
      const maxMs = (durationInSeconds + 5) * 1000;
      const randomInterval = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
      console.log(`Next reload in ${randomInterval / 1000} seconds`);
      
      const timeout = setTimeout(() => {
        window.location.reload();  // Reloads the page
      }, randomInterval);
      
      return timeout;
    };
    
    // Schedule the first reload
    const timeout = scheduleNextReload();

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [autoReloadEnabled, refreshDuration]);

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
    storeSetting('refreshDuration', refreshDuration);
  }, [refreshDuration]);

  // Request notification permission on component mount
  useEffect(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    // Function to fetch data from all pages
    const fetchData = async () => {
      try {
        const proxyUrl = 'https://corsproxy.io/?';
        const baseUrl = 'https://www.goodsmileus.com/collections/on-sale?sort_by=price-ascending';
        
        let allProductItems = [];
        let currentPage = 1;
        let hasMorePages = true;
        let masterDoc = null;
        
        console.log('Starting to fetch all pages...');
        
        while (hasMorePages) {
          const targetUrl = currentPage === 1 ? baseUrl : `${baseUrl}&page=${currentPage}`;
          console.log(`Fetching page ${currentPage}...`);
          
          const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
          
          if (!response.ok) {
            throw new Error(`Network response was not ok for page ${currentPage}`);
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
            allProductItems = [...allProductItems, ...Array.from(productItems)];
            
            // Use the first page as our master document to preserve styling
            if (currentPage === 1) {
              masterDoc = doc;
            }
            
            currentPage++;
          }
        }
        
        console.log(`Total products collected from ${currentPage - 1} pages: ${allProductItems.length}`);
        
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
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on component mount

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
      // Filter 1: Original price must be >= threshold
      if (product.originalPrice >= basePriceThreshold) {
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
          
          // Add the filtered item to the clean container
          cleanContainer.appendChild(itemToAdd);
          filteredCount++;
        }
      }
    });
    
    // Handle new products alerts - only if this filtering came from a data reload
    if (isFromDataReload && newProductsFound.length > 0) {
      setNewProducts(newProductsFound);
      
      // Browser notification (if permission granted)
      if (Notification.permission === 'granted') {
        new Notification(`${newProductsFound.length} New Goodsmile Deal${newProductsFound.length > 1 ? 's' : ''}!`, {
          body: newProductsFound.map(p => `${p.title} - ${p.percentDecrease}% OFF`).join('\n'),
          icon: '//www.goodsmileus.com/favicon.ico'
        });
      }
      
      // Console alert
      console.log('🚨 NEW PRODUCTS FOUND:', newProductsFound);
      
      // Audio alert - Metal Gear Solid sounds
      try {
        console.log('Playing first alert sound...');
        // First sound: tindeck_1
        const audio1 = new Audio('/tindeck_1.mp3');
        audio1.play().catch((e) => console.log('First alert audio failed:', e));
        
        // Second sound: untitled_1150 (play after first one ends or after 3 seconds)
        setTimeout(() => {
          console.log('Playing second alert sound...');
          const audio2 = new Audio('/untitled_1150.mp3');
          audio2.play().catch((e) => console.log('Second alert audio failed:', e));
        }, 3000);
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
        height: 280px;
        overflow: hidden;
      }
      .product-card__image img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .collection-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 1rem;
        padding: 1rem;
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
  }, [basePriceThreshold, percentThreshold, allProducts, masterDocHtml]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Controls */}
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderBottom: '1px solid #dee2e6',
        display: 'flex',
        gap: '20px',
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
            min="1"
            onChange={(e) => setRefreshDuration(Math.max(1, Number(e.target.value)))}
            style={{ width: '60px', padding: '5px' }}
          /> minutes
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
          <button 
            onClick={() => {
              try {
                console.log('Playing first sound...');
                // First sound: tindeck_1
                const audio1 = new Audio('/tindeck_1.mp3');
                audio1.play().catch((e) => console.log('First audio failed:', e));
                
                // Second sound: untitled_1150 (play after first one ends or after 3 seconds)
                setTimeout(() => {
                  console.log('Playing second sound...');
                  const audio2 = new Audio('/untitled_1150.mp3');
                  audio2.play().catch((e) => console.log('Second audio failed:', e));
                }, 3000);
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
          zIndex: 100
        }}>
          <h2 style={{ margin: 0, color: '#0284c7' }}>
            Goodsmile Sale Tracker - Found {filteredProducts[0]?.count || 0} products (≥${basePriceThreshold} original, ≥{percentThreshold}% off)
          </h2>
        </div>
      )}
      
      {filteredProducts.length > 0 ? (
        <div dangerouslySetInnerHTML={{ __html: filteredProducts[0].modifiedHtml }} />
      ) : (
        !loading && (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <p>No products found matching the criteria (≥$95 original price, ≥50% discount)</p>
          </div>
        )
      )}
    </div>
  );
}

export default GoodsmileTracker