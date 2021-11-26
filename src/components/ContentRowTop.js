import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovie from './LastMovie';
import GenreInDb from './GenreInDb'
import Table from './Table';


let data = [
	{
		color: 'primary',
		titulo: 'Movies in Data Base',
		numero: 21,
		icono: 'fa-film'
	},

	{
		color: 'success',
		titulo: 'Total Awards',
		numero: 40,
		icono: 'fa-award'
	},

	{
		color: 'warning',
		titulo: 'Actors quantity',
		numero: 60,
		icono: 'fa-user'
	}
]



function ContentRowTop() {
	return (
		<div className='row'>
			{data.map((item, index) => {
				return <ContentRowMovies
					key={index + item}
					color={item.color}
					titulo={item.titulo}
					numero={item.numero}
					icono={item.icono}
				/>
			}
			)}
			<LastMovie />
			<GenreInDb />
			<Table />
		</div>

	)
}
export default ContentRowTop;