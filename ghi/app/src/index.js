import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
async function loadLists() {
  const responseManufacturer = await fetch('http://localhost:8100/api/manufacturers/');
  const responseModels = await fetch('http://localhost:8100/api/models/');
  const responseAutomobiles = await fetch('	http://localhost:8100/api/automobiles/');
  const responseRecords = await fetch('	http://localhost:8090/api/record/ ');

  if (responseManufacturer.ok && responseModels.ok && responseAutomobiles && responseRecords) {
    const dataManufacturer = await responseManufacturer.json();
    const dataModels = await responseModels.json();
    const dataAutomobiles = await responseAutomobiles.json();
    const dataRecords = await responseRecords.json();
    console.log(dataRecords.records)
    root.render(
      <React.StrictMode>
        <App manufacturers={dataManufacturer.manufacturers}
            models={dataModels.models}
            automobiles={dataAutomobiles.autos}
            records={dataRecords.records}
        />
        
      </React.StrictMode>
    );
  }else{
    console.error(responseManufacturer, responseModels, responseAutomobiles);
  }
}
loadLists();
