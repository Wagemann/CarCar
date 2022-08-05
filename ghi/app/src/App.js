import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import VehicleModelList from './VehicleModelList';
import VehicleModelForm from './VehicleModelForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import TechnicianList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import ServiceHistoryForm from './ServiceHistoryForm';
import ServiceHistoryList from './ServiceHistoryList';

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
  if (props.technicians === undefined){
    return null;
  }
  if (props.appointments === undefined){
    return null;
  }
  if (props.history !== undefined){
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
        <Route path="/service_history" element={<ServiceHistoryList history={props.history} />} />
          <Route path="service_history/search" element={<ServiceHistoryForm />} />
          <Route path="/appointments" element={<AppointmentList appointments={props.appointments} />} />
          <Route path="/appointments/create" element={<AppointmentForm />} />
          <Route path="/appointments/technicians" element={<TechnicianList technicians={props.technicians} />} />
          <Route path="/appointments/technicians/create" element={<TechnicianForm />} />
          <Route path="/inventory/automobiles" element={<AutomobileList automobiles={props.automobiles} />} />
          <Route path="/inventory/automobiles/create" element={<AutomobileForm />} />
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
