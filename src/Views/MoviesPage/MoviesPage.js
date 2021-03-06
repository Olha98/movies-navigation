import React, { Component } from 'react'
import SearchMovie from '../MovieDetailesPage/SearchMovie/SearchMovie'
import services from '../../Services/searchServices'
import css from './MoviesPage.module.css'
const queryString = require('query-string');




class MoviesPage extends Component {
  state = {

    locationSearch: '',
    locationPathname: '',
  }


  componentDidMount() {
    const { query: nextQuery } = queryString.parse(this.props.location.search)

    if (nextQuery) {

      this.resultOfSearch()
      this.setState({
        locationSearch: this.props.location.search,
        locationPathname: this.props.location.pathname
      })

    }
  }

  resultOfSearch = () => {
    services.getResultOfSearch()
  }


  hendelChangeSearch = (query) => {

    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`
    })
  }

  render() {

    return (
      <section className={css.boxMovies}>
        <h2>Let's choose an interesting movie for you?</h2>
        <hr />
        <SearchMovie onSubmit={this.hendelChangeSearch} />
      </section>

    )
  }
}
export default MoviesPage