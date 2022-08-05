import React, { Component } from 'react';


class AppointmentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appointments: []
        }
    
    this.handleSubmit=this.handleSubmit.bind(this);
    this.cancel=this.cancel.bind(this);
    // this.finished=this.finished.bind(this);
    };


    async componentDidMount() {
        const url = (`http://localhost:8080/api/appointments/`);
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ appointments: data.appointments });
        }
    }

    async handleSubmit(appointment) {
        const data = {...this.state}
        const locationUrl = `http://localhost:8080/api/appointments/${data.vin}/`;
        const fetchConfig = {
            method: "delete",
            headers: {
                'Content-Type': 'application/json'
        }
    };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            const newAppointment = await response.json();
            let remainingAppointments = []
            for (let i = 0; i < this.state.shoes.length; i++) {
                let currentAppointment = this.state.appointments[i]
                if (parseInt(this.state.appointment) !== currentAppointment.id) {
                    remainingAppointments.push(currentAppointment)
                }
            }
            this.setState({
                appointment: '',
                appointments: remainingAppointments
            })
        }
    }

    async cancel(appointment) {
        console.log("THTHTTHTH!!!!", appointment)
        const cancelUrl = await fetch(`http://localhost:8080/api/appointments/${appointment}/`)
        const fetchConfig = {
            method: "delete",
        }
        const data = await fetch(cancelUrl, fetchConfig)
        const response = await fetch('http://localhost:8080/api/appointments/')
        alert('Delete successful');
    }


    // handleAppointmentSelection(e) {
    //     const value = e.target.value;
    //     this.setState({appointment: value});
    // }

    
//     async finished(appointment){
//         const response = await fetch(`http://localhost:8080/api/appointments/`)
//         const fetchConfig = {
//             method: "put",
//             // body: JSON.stringify(completed: False),
//             headers: {
//                 'Content-Type': 'application/json'
//         }
//         if (response.ok) {
//             const data = await response.json()
//             this.setState = { appointments: this.state.appointments}
//         }
//     }
// }

 render() {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th>Vin</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician</th>
                <th>Reason</th>
                <th>Is VIP</th>
                </tr>
            </thead>
            <tbody key="" >{this.state.appointments.map(appointment => {
                return (
                    <tr key={appointment.vin} >
                        <td>{appointment.vin}</td>
                        <td>{appointment.customer}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time.slice(0, -3)}</td>
                        <td>{appointment.technician.name}</td>
                        <td>{appointment.reason}</td>
                        <td>{(appointment.vip)? "No": "Yes"}</td>
                        <td><button type="button" className="btn btn-danger btn-sm" onClick={() => this.cancel(appointment)}>Cancel</button></td>
                        <td><button type="button" className="btn btn-success btn-sm" onClick={() => this.handleSubmit(appointment)}>Finished</button></td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}
}
export default AppointmentList;



// render(){
//     return(
//     <div className="row">
//     <div className="offset-3 col-6">
//       <div className="shadow p-4 mt-4">
//         <h1>Service Appointments</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-floating mb-3">
//             <input placeholder="Vin" type="text" className="form-control" id="vin" name="vin" value={this.state.vin} onChange={this.handleVinChange} />
//             <label htmlFor="vin">Vin</label>
//           </div>
//           <div className="form-floating mb-3">
//             <input placeholder="Customer" type="text" className="form-control" id="customer" name="customer" value={this.state.customer} onChange={this.handleCustomerChange} />
//             <label htmlFor="customer">Customer</label>
//           </div>
//           <div className="form-floating mb-3">
//             <input placeholder="Date" type="text" className="form-control" id="date" name="date" value={this.state.date} onChange={this.handleDateChange} />
//             <label htmlFor="date">Date</label>
//           </div>
//           <div className="form-floating mb-3">
//             <input placeholder="Time" type="text" className="form-control" id="time" name="time" value={this.state.time} onChange={this.handleTimeChange} />
//             <label htmlFor="time">Time</label>
//           </div>
//           <div className="form-floating mb-3">
//             <input placeholder="Technician" type="text" className="form-control" id="technician" name="technician" value={this.state.technician} onChange={this.handleTechnicianChange} />
//             <label htmlFor="technician">Technician Name</label>
//           </div>
//           <div className="form-floating mb-3">
//             <input placeholder="Reason" type="text" className="form-control" id="reason" name="customer" value={this.state.reason} onChange={this.handleReasonChange} />
//             <label htmlFor="reason">Reason</label>
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     </div>
//   </div>
//     )
