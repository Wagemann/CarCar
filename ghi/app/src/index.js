import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
async function loadLists() {
  const response = await fetch('http://localhost:8100/api/manufacturers/');
  const response2 = await fetch('http://localhost:8100/api/models/');
  if (response.ok && response2.ok) {
    const data = await response.json();
    const data2 = await response2.json();
    // console.log(data2.models)
    root.render(
      <React.StrictMode>
        <App manufacturers={data.manufacturers} models={data2.models}/>
        
      </React.StrictMode>
    );
  }else{
    console.error(response, response2);
  }
}
loadLists();
