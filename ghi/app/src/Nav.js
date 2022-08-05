import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role='button' data-bs-toggle='dropdown'aria-expanded="false" >
              Inventory
            </a>
            <ul className="dropdown-menu">
              <li><a  className="dropdown-item" aria-current="page" href="/inventory/manufacturer/create" >Create Manufacturer</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="/inventory/manufacturer" >Manufacturer List</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="/inventory/models/create" >Create Vehicle Model</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="/inventory/models" >Vehicle Model List</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="/inventory/automobiles/create" >Create Automobile</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="/inventory/automobiles" >Automobile List</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  aria-current="page" to="/inventory/manufacturer/create">Create Manufacturer</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/inventory/manufacturer">Manufacturers</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/inventory/models/create">Create Vehicle Model</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/inventory/models">Vehicle Models</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/inventory/automobiles/create">Create Automobile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/inventory/automobiles">Automobiles</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/sales">Sales</NavLink>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role='button' data-bs-toggle='dropdown'aria-expanded="false" >
              Sales
            </a>
            <ul className="dropdown-menu">
              <li><a  className="dropdown-item" aria-current="page" href="/sales/customer/create" >New Customer</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="/sales/employee/create" >New Employee</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="/sales/all" >Sales List</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="/sales/detail" >Employee Sales</a></li>
              <li><a  className="dropdown-item" aria-current="page" href="/sales/record/create" >Create Sales Record</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/service">Service</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/appointments/technicians">Technicians</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/appointments/technicians/create">Create Technician</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/appointments">Appointments</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/appointments/create">Make an Appointment</NavLink>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
