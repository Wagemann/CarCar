import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import VehicleModelList from './VehicleModelList';
import VehicleModelForm from './VehicleModelForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import SalesList from './SalesList';
import SalesListDetail from './SaleListDetail';
import EmployeeForm from './EmployeeForm';
import CustomerForm from './CustomerForm';
import SaleRecordForm from './SaleRecordForm';

function App(props) {
  if (props.manufacturers === undefined){
    return null;
  }
  if (props.models === undefined){
    return null;
  }
  if (props.automobiles === undefined){
    return null;
  }
  if (props.records === undefined){
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
         <Route path="/sales/record/create" element={<SaleRecordForm />} />
         <Route path="/sales/customer/create" element={<CustomerForm />} />
         <Route path="/sales/employee/create" element={<EmployeeForm />} />
         <Route path="/sales/detail" element={<SalesListDetail record={props.records} />} />
         <Route path="/sales/all" element={<SalesList record={props.records} />} />
         <Route path="/inventory/automobiles" element={<AutomobileList automobiles={props.automobiles} />} />
         <Route path="/inventory/automobiles/create" element={<AutomobileForm />} />
          <Route path="/inventory/models" element={<VehicleModelList models={props.models} />} />
          <Route path="/inventory/models/create" element={< VehicleModelForm/> }  />
          <Route path="/inventory/manufacturer" element={<ManufacturerList manufacturers={props.manufacturers} />} />
          <Route path="/inventory/manufacturer/create" element={<ManufacturerForm/ >} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
