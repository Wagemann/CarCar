import React, { Component } from 'react';

class AppointmentForm extends Component {
    constructor(props){
        super(props);
        this.state={
            vin: '',
            customer: '',
            date: '',
            time:'',
            technician:'',
            reason:'',

        };
        this.handleVinChange=this.handleVinChange.bind(this);
        this.handleCustomerChange=this.handleCustomerChange.bind(this);
        this.handleDateChange=this.handleDateChange.bind(this);
        this.handleTimeChange=this.handleTimeChange.bind(this);
        this.handleTechnicianhange=this.handleTechnicianChange.bind(this);
        this.handleReasonChange=this.handleReasonChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        const url = "http://localhost:8080/api/appointments/"
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            this.setState({appointments: data.appointments})
        };
    }


    handleVinChange(event){
        const value = event.target.value;
        this.setState({vin:value})
    }
    handleCustomerChange(event){
        const value = event.target.value;
        this.setState({customer:value})
    }
    handleDateChange(event){
        const value = event.target.value;
        this.setState({date:value})
    }

    handleTimeChange(event){
        const value = event.target.value;
        this.setState({time:value})
    }
    handleTechnicianChange(event){
        const value = event.target.value;
        this.setState({technician:value})
    }
    handleReasonChange(event){
        const value = event.target.value;
        this.setState({reason:value})
    }


    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state}
        delete data.technicians

        const appointmentUrl = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok){
            const newAppointment = await response.json();
            const cleared = {
                vin: '',
                customer: '',
                date: '',
                time:'',
                reason:'',
                }
            this.setState(cleared)
        } 
    }
    render(){
        return(
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new appointment</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input placeholder="Vin" type="text" className="form-control" id="vin" name="vin" value={this.state.vin} onChange={this.handleVinChange} />
                <label htmlFor="vin">Vin number</label>
              </div>
              <div className="form-floating mb-3">
                <input placeholder="Customer" type="text" className="form-control" id="customer" name="customer" value={this.state.customer} onChange={this.handleCustomerChange} />
                <label htmlFor="customer">Customer Name</label>
              </div>
              <div className="form-floating mb-3">
                <input placeholder="Date" type="text" className="form-control" id="date" name="date" value={this.state.date} onChange={this.handleDateChange} />
                <label htmlFor="date">Date</label>
              </div>
              <div className="form-floating mb-3">
                <input placeholder="Time" type="text" className="form-control" id="time" name="time" value={this.state.time} onChange={this.handleTimeChange} />
                <label htmlFor="time">Time</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleTechnicianChange} value={this.state.technician} name="technician" required id="technician" className="form-select">
                  <option value="">Technician</option>
                  {this.state.technicians?.map(technician => {
                    return <option key={technician.href} value={technician.id}>{technician.name}</option>
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input placeholder="Reason" type="text" className="form-control" id="reason" name="reason" value={this.state.reason} onChange={this.handleReasonChange} />
                <label htmlFor="reason">Reason</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
        )
    }
}
export default AppointmentForm;