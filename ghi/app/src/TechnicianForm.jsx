import React, { Component } from 'react';

class TechnicianForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            employee_id: '',

        };
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleEmployeeIdChange=this.handleEmployeeIdChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    // async componentDidMount(){
    //     const url = "http://localhost:8100/api/models/"
    //     const response = await fetch(url)
    //     if (response.ok){
    //         const data = await response.json()
    //         this.setState({models: data.models})
    //     };
    // }


    handleNameChange(event){
        const value = event.target.value;
        this.setState({name:value})
    }
    handleEmployeeIdChange(event){
        const value = event.target.value;
        this.setState({employee_id:value})
    }
   

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state}

        const technicianUrl = "http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok){
            const newTechnician = await response.json();
            const cleared = {
                name: '',
                employee_id: '',
                }
            this.setState(cleared)
        } 
    }


    render(){
        return(
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new technician</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input placeholder="Name" type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleNameChange} />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input placeholder="Employee Id" type="text" className="form-control" id="employee_id" name="employee_id" value={this.state.employee_id} onChange={this.handleEmployeeIdChange} />
                <label htmlFor="employee_id">Employee Id</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
        )
    }
}
export default TechnicianForm;