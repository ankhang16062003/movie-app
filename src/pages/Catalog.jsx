import React from 'react'
import {useParams} from 'react-router-dom'
import MovieGrid from '../components/movie-grid/MovieGrid'

const Catalog = () => {

    const {category} = useParams()

    return (
        <div className="catalog">
            <div className="catalog__title">
                <h3>
                    {category === 'movie' ? 'Movies' : 'Tvs' }
                </h3>
            </div>
            <div className="catolog__body">
                <MovieGrid category = {category}/>
            </div>
        </div>
    )
}

export default Catalog





