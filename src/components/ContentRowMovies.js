import React from 'react'
import PropTypes from 'prop-types'

function ContentRowMovies({color, titulo, numero, icon}){
    return (
        <>
            <div className="col-md-4 mb-4">
							<div className={`card border-left-${color} shadow h-100 py-2`}>
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{titulo}</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{numero}</div>
										</div>
										<div className="col-auto">
											<i className={`fas ${icon} fa-2x text-gray-300`}></i>
										</div>
									</div>
								</div>
							</div>
						</div>
                        

        </>
    )
    
    
}

ContentRowMovies.propTypes= {
    color: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    icono: PropTypes.string.isRequired
}

ContentRowMovies.defaultProps= {
    color: 'danger',
    titulo: 'Movies',
    numero: 0,
    icono: 'fa-film'
}

export default ContentRowMovies;