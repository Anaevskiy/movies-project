import React from "react"


class Search extends React.Component {

    state = {
        search: '',
        typeSearch: ''
    }

    handleKey = event => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.typeSearch)
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render () {
        const {search} = this.state
        return (
            <div className="row">
                <div className="input-field col s4">
                  <input
                   placeholder="Title..."
                   value={search} 
                   type="search" 
                   className="validate"
                   onChange={event => this.setState({search: event.target.value})}
                   onKeyUp={this.handleKey}
                  />
                  <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.typeSearch)}>Search</button>
                    <p className="filter-search">
                    <label>
                    <input name="typeSearch" type="radio" value='movie' onChange={this.handleChange}/>
                    <span>Movies</span>
                    </label>

                    <label>
                    <input name="typeSearch" type="radio" value='series' onChange={this.handleChange}/>
                    <span>Series</span>
                    </label>

                    <label>
                    <input name="typeSearch" type="radio" value='all' onChange={this.handleChange}/>
                    <span>All</span>
                    </label>
                    </p>
                </div>
            
            </div>          
        )
    }
}


export {Search}