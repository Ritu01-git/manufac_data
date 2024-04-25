import React, { useEffect, useState } from 'react';
import { CropTable } from './components/CropTable';
import { processData } from './utils/DataProcessing';
import './App.css';
import { AreaTable } from './components/AreaTable';
import { MantineProvider } from '@mantine/core'; // Import MantineProvider


function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch and process data
    const fetchData = async () => {
      try {
        const response = await fetch('/data/indiandata.json');
        console.log(response)
        const jsonData = await response.json();
        console.log(jsonData)
        const processedData = processData(jsonData);
        console.log(processedData)
        setData(processedData);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MantineProvider>
    <div className="App">
      <h1>Indian Agriculture Analytics</h1>
      <CropTable data={data} />
      <AreaTable data={data} />
    </div>
    </MantineProvider>
  );
}

export default App;
