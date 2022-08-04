import React from 'react';

function TechnicianList(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th>Technician Name</th>
                <th>Employee ID</th>
                </tr>
            </thead>
            <tbody>{props.technicians.map(technician => {
                return (
                    <tr key={technician.id} >
                        <td>{technician.name}</td>
                        <td>{technician.employee_id}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default TechnicianList;