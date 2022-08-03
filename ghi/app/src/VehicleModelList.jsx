import React from 'react';

function VehicleModelList(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th>Model Name</th>
                <th>Manufacturer</th>
                <th>Image</th>
                </tr>
            </thead>
            <tbody>{props.vehiclemodels.map(vehiclemodel => {
                return (
                    <tr key={vehiclemodel.id} >
                        <td>{vehiclemodel.name}</td>
                        <td>{vehiclemodel.manufacturer}</td>
                        <td><img src={vehiclemodel.picture_url} alt=""/></td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default VehicleModelList;