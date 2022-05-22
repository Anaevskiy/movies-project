import React from "react"
import {Card} from './Card'


function Cards (props) {

    const {movies = []} = props

    return (
        <div className="movies">
        {movies.length ? 
        props.movies.map(item => (
              <Card item={item} key={item.imdbID}/>
        )) :
        <h3>Not Found</h3>
        }
        </div>
    )
}


export {Cards}

