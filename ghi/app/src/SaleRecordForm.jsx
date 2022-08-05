import React, { Component } from 'react';

class SaleRecordForm extends Component {
    constructor(props){
        super(props);
        this.state={
            automobile:'',
            employee_id:'',
            customer_id:'',
            price:'',
            automobiles: [],
            employees: [],
            customers: [],
        };
        this.handleAutomobileChange=this.handleAutomobileChange.bind(this);
        this.handleEmployeeChange=this.handleEmployeeChange.bind(this);
        this.handleCustomerChange=this.handleCustomerChange.bind(this);
        this.handlePriceChange=this.handlePriceChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        const automobilesUrl = "http://localhost:8100/api/automobiles/"
        const automobilesResponse = await fetch (automobilesUrl)
        if (automobilesResponse.ok){
            const automobilesData = await automobilesResponse.json()
            this.setState({automobiles: automobilesData.autos})
        }
        
        const employeeUrl = "http://localhost:8090/api/employee/"
        const employeeResponse = await fetch(employeeUrl)
        if (employeeResponse.ok){
            const employeeData = await employeeResponse.json()
            this.setState({employees: employeeData.employee})
        }
        
        const customerUrl = "http://localhost:8090/api/customer/"
        const customerResponse = await fetch (customerUrl)
        if (customerResponse.ok){
            const customerData = await customerResponse.json()
            console.log("customerData", customerData)
            this.setState({customers: customerData.customer})
        }
    }
    
    handleAutomobileChange(event){
        const value = event.target.value;
        this.setState({automobile:value})
    }
    handleEmployeeChange(event){
        const value = event.target.value;
        this.setState({employee_id:value})
    }
    
    handleCustomerChange(event){
        const value = event.target.value;
        this.setState({customer_id:value})
    }
    
    handlePriceChange(event){
        const value = event.target.value;
        this.setState({price:value})
    }
    
    
    async handleSubmit(event){
        console.log("crazy event-->",event)
        event.preventDefault();
        const data ={...this.state}
        console.log("im the data before deletion--->", data)
        delete data.automobiles
        delete data.employees
        delete data.customers
        console.log("im the data after deletion--->", data)
        const recordUrl = "http://localhost:8090/api/record/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(recordUrl, fetchConfig);
        if(response.ok){
            const newRecord = await response.json();
            const cleared ={
                automobiles: '',
                employee_name: '',
                customer_name: '',
                price:'',
                }
            this.setState(cleared)
        }
    }
    render() { 
        return (
            <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a new Record</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <select onChange={this.handleAutomobileChange} name="automobile" required id="automobile" className="form-select">
                      <option value="">Select automobile</option>
                      {this.state.automobiles.map(auto => { 
                          return <option key={auto.id} value={auto.id}>{auto.vin}</option>
                        })}
                    </select>
                  </div>
                  <div className="mb-3">
                    <select onChange={this.handleEmployeeChange}  name="employee" required id="employee" className="form-select">
                      <option value="">Select Employee</option>
                      {this.state.employees.map(person => {
                          return <option key={person.id} value={person.employee_id}>{person.employee_name}</option>
                        })}
                    </select>
                  </div>
                  <div className="mb-3">
                    <select onChange={this.handleCustomerChange}  name="customer" required id="customer" className="form-select">
                      <option value="">Select Customer</option>
                      {this.state.customers.map(person => {
                          return <option key={person.id} value={person.id}>{person.customer_name}</option>
                        })}
                    </select>
                  </div>
                  <div className="form-floating mb-3">
                  <input onChange={this.handlePriceChange}  placeholder="price" required type="number" name="price" id="price" className="form-control" />
                  <label htmlFor="phone price">Sales</label>
                </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>            
        );
    }
}
 
export default SaleRecordForm;