import React from 'react';

function VehicleModelList(props) {
    console.log("props!!!!!!", props.models)
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th>Model Name</th>
                <th>Manufacturer</th>
                <th>Image</th>
                </tr>
            </thead>
            <tbody>{props.models.map(model => {
                return (
                    <tr key={model.href} >
                        <td>{model.name}</td>
                        <td>{model.manufacturer.name}</td>
                        <td><img src={model.picture_url} alt=""/></td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default VehicleModelList;