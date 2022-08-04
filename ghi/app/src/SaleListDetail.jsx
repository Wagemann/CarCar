import React, { Component } from 'react';
import { renderMatches } from 'react-router-dom';

class SalesListDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            employee_name:"",
            records: [],
            employees: []
        };
        this.handleEmployeeNameChange=this.handleEmployeeNameChange.bind(this);
    }
    async componentDidMount(){
        const urlRecord = "http://localhost:8090/api/record/"
        const responseRecord = await fetch(urlRecord)
        if (responseRecord.ok){
            const dataRecord = await responseRecord.json()
            this.setState({records: dataRecord.records})
        }

        const urlEmployee = "http://localhost:8090/api/employee/"
        const responseEmployee = await fetch(urlEmployee)
        if (responseEmployee.ok){
            const dataEmployee = await responseEmployee.json()
            this.setState({employees: dataEmployee.employee})
        }

    }
    handleEmployeeNameChange(event){
        const value = event.target.value;
        this.setState({employee_name:value})
    }
    render(){
        return (
            <div>
            <select onChange={this.handleEmployeeNameChange} value={this.state.employee_name} name="employee_name" required id="employee_name" className="form-select">
                    <option value="">Employee Name</option>
                    {this.state.employees.map(employee => {
                        return <option key={employee.employee_id} value={employee.employee_name}>{employee.employee_name}</option>
                    })}
                    </select>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Employee Name</th>
                    <th>Employee Id Number</th>
                    <th>Customer</th>
                    <th>Automobile Vin</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>{this.state.records.map(file => {
                    if(this.state.employee_name === file.employee_name){
                    return (
                        <tr key={file.id} >
                            <td>{file.employee_name}</td>
                            <td>{file.employee_id}</td>
                            <td>{file.customer_name}</td>
                            <td>{file.vin}</td>
                            <td>{file.price}</td>
                        </tr>
                    );
                };
                })}
                </tbody>
            </table>
        </div>
        );
    }
}


export default SalesListDetail;
    