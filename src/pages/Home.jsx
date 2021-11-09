import React from 'react'
import {Link} from 'react-router-dom'

import SliderHome from '../components/slider-home/SliderHome'
import ListItem from '../components/list-item/ListItem'
import { ButtonOutline } from '../components/button/Button'

import{category, movieType, tvType, mediaType, timeWindow} from '../api/pagesDb'


const Home = () => {
    return (
        <>
            <div className="home">
                <SliderHome />

                <div className="container-list">
                    <div className="container-list__header">
                        <h3>Trendings</h3>
                        <ButtonOutline><Link to = {`/${category.trending}`}>View more</Link></ButtonOutline>
                    </div>
                    <ListItem category = {category.trending} mediaType = {mediaType.all}  timeWindow = {timeWindow.week}></ListItem>
                </div>

                <div className="container-list">
                    <div className="container-list__header">
                        <h3>Movies</h3>
                        <ButtonOutline><Link to = {`/${category.movie}`}>View more</Link></ButtonOutline>
                    </div>
                    <ListItem category = {category.movie} type = {movieType.now_playing}></ListItem>
                </div>

                <div className="container-list">
                    <div className="container-list__header">
                        <h3>Tvs</h3>
                        <ButtonOutline><Link to = {`/${category.tv}`}>View more</Link></ButtonOutline>
                    </div>
                    <ListItem category = {category.tv} type = {tvType.on_the_air}></ListItem>
                </div>
            </div>
        </>
    )
}

export default Home
