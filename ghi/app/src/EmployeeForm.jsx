import React, { Component } from 'react';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employee_name: '',
            employee_id: '',
            
          };
        this.handleEmployeeNameChange = this.handleEmployeeNameChange.bind(this);
        this.handleEmployeeIdChange = this.handleEmployeeIdChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data);

        const employeeUrl = 'http://localhost:8090/api/employee/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(employeeUrl, fetchConfig);
        if (response.ok) {
            const newManufacturer = await response.json();
            console.log(newManufacturer);

            const cleared = {
                employee_name: '',
                employee_id: '',
            };
              this.setState(cleared);
            }
        }

    handleEmployeeNameChange(event) {
        const value = event.target.value;
        this.setState({employee_name: value})
    }

    handleEmployeeIdChange(event) {
        const value = event.target.value;
        this.setState({employee_id: value})
    }


  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>New Employee</h1>
              <form onSubmit={this.handleSubmit} id="create-employee-form">
                <div className="form-floating mb-3">
                  <input onChange={this.handleEmployeeNameChange} value={this.state.employee_name} placeholder="employee_name" required type="text" name="employee_name" id="employee_name" className="form-control" />
                  <label htmlFor="name">Enter new employee name</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={this.handleEmployeeIdChange} value={this.state.employee_id} placeholder="employee_id" required type="text" name="employee_id" id="employee_id" className="form-control" />
                  <label htmlFor="name">Assign employee id number</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default EmployeeForm;