import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
async function loadLists() {
  const responseManufacturer = await fetch('http://localhost:8100/api/manufacturers/');
  const responseModels = await fetch('http://localhost:8100/api/models/');
  const responseAutomobiles = await fetch('	http://localhost:8100/api/automobiles/');
  const responseTechnicians = await fetch('http://localhost:8080/api/technicians/');
  const responseAppointments = await fetch('http://localhost:8080/api/appointments/');
  const responseServiceHistory = await fetch('http://localhost:8080/api/service_history/${historyId}');
  const responseRecords = await fetch('	http://localhost:8090/api/record/ ');
  

  if (responseManufacturer.ok && responseModels.ok && responseAutomobiles.ok && responseTechnicians.ok
    && responseAppointments.ok && responseServiceHistory && responseRecords) {
    const dataManufacturer = await responseManufacturer.json();
    const dataModels = await responseModels.json();
    const dataAutomobiles = await responseAutomobiles.json();
    const dataTechnicians = await responseTechnicians.json();
    const dataAppointments = await responseAppointments.json();
    const dataServiceHistory = await responseServiceHistory.json();
    const dataRecords = await responseRecords.json();
    // console.log(dataAutomobiles.autos)
    
      root.render(
      <React.StrictMode>
        <App 
          manufacturers={dataManufacturer.manufacturers} 
          models={dataModels.models} 
          automobiles={dataAutomobiles.autos}
          technicians={dataTechnicians.technician} 
          appointments={dataAppointments.appointments} 
          service_history={dataServiceHistory.history}
          records={dataRecords.records}
          />
      </React.StrictMode> 
      );
    }else{
    console.error(responseManufacturer, responseModels, responseAutomobiles, responseTechnicians,
      responseAppointments, responseServiceHistory, responseRecords);
  }
}
loadLists();

