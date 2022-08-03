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
            <tbody>{props.autos.map(model => {
                return (
                    <tr key={model.id} >
                        <td>{model.name}</td>
                        <td>{model.manufacturer}</td>
                        <td><img src={model.picture_url} alt=""/></td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default VehicleModelList;