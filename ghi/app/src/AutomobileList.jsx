import React from 'react';

function AutomobileList(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th>Vin</th>
                <th>Color</th>
                <th>Year</th>
                <th>Model</th>
                <th>Manufacturer</th>
                </tr>
            </thead>
            <tbody>{props.autos.map(auto => {
                return (
                    <tr key={auto.id} >
                        <td>{auto.vin}</td>
                        <td>{auto.color}</td>
                        <td>{auto.year}</td>
                        <td>{auto.model}</td>
                        <td>{auto.manufacturer}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default AutomobileList;