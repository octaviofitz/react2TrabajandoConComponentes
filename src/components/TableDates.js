import React from 'react';

function TableDates({ titulo, duracion, rating, genero, premios }) {
    return (
        <tr>
            <th>{titulo}</th>
            <td>{duracion}</td>
            <td>{rating}</td>
            <td> <ul>
                   {
                   genero.map(genre=> <li>{genre}</li>)
                   }
                </ul>
                 </td>
            <td>{premios}</td>
        </tr>
    )
}
export default TableDates;