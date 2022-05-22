import React from "react"
import {Cards} from '../components/Cards'
import {Search} from '../components/Search'
import {Preloader} from '../components/Preloader'


const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount () {
        console.log(API_KEY)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Harry+Potter`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies (str, typeSearch) {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${typeSearch !== 'all' ? typeSearch : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render () {
        return (
            <main className="content">
            <Search searchMovies={this.searchMovies.bind(this)}/>
            {!this.state.loading ?
            <Cards movies={this.state.movies}/> :
            <Preloader />
            }
            </main>
        )
    }
}


export {Main}