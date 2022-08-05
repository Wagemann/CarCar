import React from 'react';

function SalesList(props) {
    return (
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
            <tbody>{props.record.map(file => {
                return (
                    <tr key={file.id} >
                        <td>{file.employee_name}</td>
                        <td>{file.employee_id}</td>
                        <td>{file.customer_name}</td>
                        <td>{file.vin}</td>
                        <td>{file.price}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default SalesList;