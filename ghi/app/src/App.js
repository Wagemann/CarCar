import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList'

function App(props) {
  if (props.menufacturers === undefined){
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/inventory/manufacturer" element={<ManufacturerList manufacturers={props.manufacturers} />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
