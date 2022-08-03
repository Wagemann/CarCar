import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList'
import ManufacturerForm from './ManufacturerForm';
import VehicleModelList from './VehicleModelList';

function App(props) {
  if (props.manufacturers === undefined){
    return null;
  }

  if (props.vehiclemodels === undefined){
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/inventory/models" element={<VehicleModelList vehiclemodels={props.vehiclemodels} />} />
          {/* <Route path="/inventory/manufacturer" element={<ManufacturerList manufacturers={props.manufacturers} />} /> */}
          <Route path="/inventory/manufacturer" element={<ManufacturerList manufacturers={props.manufacturers} />} />
          <Route path="/inventory/manufacturer/create" element={<ManufacturerForm/ >} />
          <Route path="/" element={<MainPage />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
