import React, { Component } from 'react';


class CustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customer_name: '',
            address: '',
            phone_number: '',

          };
        this.handleCustomerNameChange = this.handleCustomerNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data);

        const customerUrl = 'http://localhost:8090/api/customer/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(customerUrl, fetchConfig);
        if (response.ok) {
            const newCustomer = await response.json();
            console.log(newCustomer);

            const cleared = {
                customer_name: '',
                address: '',
                phone_number:'',
            };
              this.setState(cleared);
            }
        }

    handleCustomerNameChange(event) {
        const value = event.target.value;
        this.setState({customer_name: value})
    }

    handleAddressChange(event) {
        const value = event.target.value;
        this.setState({address: value})
    }

    handlePhoneNumberChange(event) {
        const value = event.target.value;
        this.setState({phone_number: value})
    }


  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>New Customer</h1>
              <form onSubmit={this.handleSubmit} id="create-employee-form">
                <div className="form-floating mb-3">
                  <input onChange={this.handleCustomerNameChange} value={this.state.customer_name} placeholder="customer_name" required type="text" name="customer_name" id="customer_name" className="form-control" />
                  <label htmlFor="customer name">Enter new customer name</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={this.handleAddressChange} value={this.state.address} placeholder="address" required type="text" name="address" id="address" className="form-control" />
                  <label htmlFor="address">Customer Address</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={this.handlePhoneNumberChange} value={this.state.phone_number} placeholder="phone_number" required type="number" name="phone_number" id="phone_number" className="form-control" />
                  <label htmlFor="phone number">Customer Phone Number</label>
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

export default CustomerForm;