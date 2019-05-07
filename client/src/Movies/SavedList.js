import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


export default class SavedList extends Component {
  constructor(props) {
    super(props);
    console.log(props.list)
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink activeClassName="saved-active" to={`/movies/${movie.id}`}><span className="saved-movie">{movie.title}</span></NavLink>
        ))}
        <NavLink to="/" className="home-button">Home</NavLink>
      </div>
    );
  }
}
