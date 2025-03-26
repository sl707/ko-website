// Thanks ChatGPT, actually tho
import React, { useEffect, useState } from 'react'

const GlobalEntryTracker = () => {
  const [timestamps, setTimestamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Auto-refresh the page every 1 minute (60,000 ms)
    const interval = setInterval(() => {
      window.location.reload();  // Reloads the page
    }, 300000);  // 60,000 ms = 1 minute

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Function to fetch data, filter, and sort it
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('https://ttp.cbp.dhs.gov/schedulerapi/locations/5445/slots?startTimestamp=2025-03-26T00%3A00%3A00&endTimestamp=2025-04-08T00%3A00%3A00');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        // Get current time and subtract 1 hour (in milliseconds)
        const currentTime = new Date();
        const oneHourAgo = new Date(currentTime.getTime() + (60 * 60 * 1000));

        // Filter out objects where active is 0 or timestamp is earlier than 1 hour later
        const filteredData = data.filter(item => {
          const itemTimestamp = new Date(item.timestamp);  // Convert string to Date object
          return item.active !== 0 && itemTimestamp >= oneHourAgo;
        });

        // Sort the filtered data by timestamp
        const sortedData = filteredData.sort((a, b) => 
          new Date(a.timestamp) - new Date(b.timestamp)
        );

        // Extract only the timestamp values in order
        const timestampsList = sortedData.map(item => item.timestamp);

        setTimestamps(timestampsList);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div       
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',   // Centers both horizontally
        justifyContent: 'center', // Centers vertically if needed (add height to the parent div)
        height: '100vh',           // Make the div take up the full viewport height
        textAlign: 'center',    // Centers text inside the <h1> and <ul>
      }}
    >
      <h1>
        Available Global Entry Interview Times at Philadelphia International Airport
      </h1>
      <h2>
        Auto-refreshes every 5 minutes
      </h2>
      <ul style={{
        fontSize: '96px',      // Make the font bigger
        padding: '30px',       // Add some padding inside the list
        margin: '30px',        // Add some margin outside the list
        lineHeight: '2',       // Increase line height for spacing between items
      }}>
        {timestamps.map((timestamp, index) => (
          <li key={index}>{timestamp}</li>
        ))}
      </ul>
    </div>
  );
}

export default GlobalEntryTracker