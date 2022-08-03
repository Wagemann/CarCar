import React from 'react';

function ManufacturerList(props) {
    return (
        <table>
            <thead>
                <tr>
                <th>Manufacturer Name</th>
                </tr>
            </thead>
            <tbody>{props.manufacturers.map(manufacturer => {
                return (
                    <tr key={manufacturer.id} >
                        <td>{manufacturer.name}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default ManufacturerList;