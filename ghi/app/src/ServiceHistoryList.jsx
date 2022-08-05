import React, {Component} from 'react';
import './SearchVIN';
import {useState} from 'react'


function Search () {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return (
        <div className="main">
        <h1>Search VIN</h1>
        <div className="search">
            <input
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
            />
        </div>
        <Search input={inputText} />
        </div>
    );
}


class ServiceHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
    };
    this.handleSearchChange=this.handleSearchChange.bind(this);
    }   

    async componentDidMount(){
        const url = "http://localhost:8080/api/service_history/"
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            this.setState({search: data.vin})
        }
    }

handleSearchChange(event){
    const value = event.target.value;
    this.setState({vin:value})
}

 render() {
    return (
        // <div><
        //     <div className='p-4 mt-4'>
        //         <select onChange={this.handleSearchChange} value={this.state.search} name="search" required id="search" className="form-select">
        //                 <option value="">Select Employee</option>
        //                 {this.state.employees.map(employee => {
        //                     return <option key={employee.employee_id} value={employee.employee_name}>{employee.employee_name}</option>
        //                 })}
        //                 </select>
        //         </div>
        // /div>
            <table className="table table-striped">
                <h1>Service appointments</h1>
                <thead>
                    <tr>
                    <th>Vin</th>
                    <th>Customer Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    </tr>
                </thead>
                <tbody>{this.state.history.map(history => {
                    if (this.state.history.map === history) {
                    return (
                        <tr key={history.id} >
                            <td>{history.vin}</td>
                            <td>{history.customer}</td>
                            <td>{history.date}</td>
                            <td>{history.time}</td>
                            <td>{history.technician.name}</td>
                            <td>{history.reason}</td>
                        </tr>
                    );
                };
                })}
                </tbody>
            </table>
    );
}
}
export default ServiceHistory;
