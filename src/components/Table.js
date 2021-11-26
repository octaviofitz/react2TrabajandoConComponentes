import React from 'react'
import TableDates from './TableDates'

let datos = [
    {
        titulo: 'Billy Elliot',
        duracion: 123,
        rating: 5,
        genero: ['Drama', 'Comedia'],
        premios: 2
    },

    {
        titulo: 'Alicia en el País de las Maravillas',
        duracion: 142,
        rating: 4.8,
        genero: ['Drama', 'Acción', 'Comedia'],
        premios: 3
    }

]

function Table() {
    return (
        <div className='container'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Duración</th>
                        <th scope="col">Ráting</th>
                        <th scope="col">Género</th>
                        <th scope="col">Premios</th>
                    </tr>
                    {datos.map((dato, i) => {
                        return <TableDates
                            key={dato + i}
                            titulo={dato.titulo}
                            duracion={dato.duracion}
                            rating={dato.rating}
                            genero={dato.genero}
                            premios={dato.premios}

                        />
                    })}

                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default Table