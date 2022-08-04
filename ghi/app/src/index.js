import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
async function loadLists() {
  const responseManufacturer = await fetch('http://localhost:8100/api/manufacturers/');
  const responseModels = await fetch('http://localhost:8100/api/models/');
  const responseAutomobiles = await fetch('	http://localhost:8100/api/automobiles/');
  const responseTechnicians = await fetch('http://localhost:8080/api/technicians/');

  if (responseManufacturer.ok && responseModels.ok && responseAutomobiles && responseTechnicians) {
    const dataManufacturer = await responseManufacturer.json();
    const dataModels = await responseModels.json();
    const dataAutomobiles = await responseAutomobiles.json();
    const dataTechnicians = await responseTechnicians.json();
    // console.log(dataAutomobiles.autos)

    root.render(
      <React.StrictMode>
        <App manufacturers={dataManufacturer.manufacturers} models={dataModels.models} automobiles={dataAutomobiles.autos}
        technicians={dataTechnicians.technician} />
        
      </React.StrictMode>
    );
  }else{
    console.error(responseManufacturer, responseModels, responseAutomobiles, responseTechnicians);
  }
}
loadLists();
