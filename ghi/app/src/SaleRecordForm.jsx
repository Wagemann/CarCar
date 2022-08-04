import React, { Component } from 'react';

class SaleRecordForm extends Component {
    constructor(props){
        super(props);
        this.state={
            automobile: [],
            employee_name: [],
            customer_name: [],
            price:"",
        };
        this.handleAutomobileChange=this.handleAutomobileChange.bind(this);
        this.handleEmployeeNameChange=this.handleEmployeeNameChange.bind(this);
        this.handleCustomerNameChange=this.handleCustomerNameChange.bind(this);
        this.handlePriceChange=this.handlePriceChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        const automobileUrl = "http://localhost:8100/api/automobiles/"
        const automobileResponse = await fetch (automobileUrl)
        if (automobileResponse.ok){
            const automobileData = await Response.json()
            this.setState({automobiles: automobileData.automobiles})
        }

        const employeeUrl = "http://localhost:8090/api/employee/"
        const employeeResponse = await fetch (employeeUrl)
        if (employeeResponse.ok){
            const employeeData = await Response.json()
            this.setState({automobiles: employeeData.automobiles})
        }

        const customerUrl = "http://localhost:8090/api/customer/"
        const customerResponse = await fetch (customerUrl)
        if (automobileResponse.ok){
            const automobileData = await Response.json()
            this.setState({automobiles: automobileData.automobiles})
        }
        
    }
    render() { 
        return ();
    }
}
 
export default SaleRecordForm;