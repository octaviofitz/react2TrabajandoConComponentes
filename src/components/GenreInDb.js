import React from 'react'
import Genre from './Genre'

let Genero= ['Acción','Animación','Aventura','Ciencia Ficción','Comedia','Documental', 'Drama','Fantasía','Infantiles','Musical']

function GenreInDb() {
    return (
        <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="row">
										
                                            {Genero.map((genre,i) => {
                                                return <Genre Genero= {genre} key={genre + i} />
                                            })}
										</div>
											</div>
										</div>
									</div>
								
							
    )
}


export default GenreInDb