import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
async function loadLists() {
  const responseManufacturer = await fetch('http://localhost:8100/api/manufacturers/');
  const responseModels = await fetch('http://localhost:8100/api/models/');
  const responseAutomobiles = await fetch('	http://localhost:8100/api/automobiles/');

  if (responseManufacturer.ok && responseModels.ok && responseAutomobiles) {
    const dataManufacturer = await responseManufacturer.json();
    const dataModels = await responseModels.json();
    const dataAutomobiles = await responseAutomobiles.json();
    console.log(dataAutomobiles.autos)
    root.render(
      <React.StrictMode>
        <App manufacturers={dataManufacturer.manufacturers} models={dataModels.models} automobiles={dataAutomobiles.autos} />
        
      </React.StrictMode>
    );
  }else{
    console.error(responseManufacturer, responseModels, responseAutomobiles);
  }
}
loadLists();
