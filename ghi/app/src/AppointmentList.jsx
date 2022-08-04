import React from 'react';

function AppointmentList(props) {
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
            <tbody key="" >{props.appointments.map(appointment => {
                return (
                    <tr key={appointment.technician.name} >
                        <td>{appointment.vin}</td>
                        <td>{appointment.customer}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                        <td>{appointment.technician.name}</td>
                        <td>{appointment.reason}</td>
                        <td>{(appointment.vip)? "No": "Yes"}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default AppointmentList;