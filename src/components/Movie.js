import React, { useEffect } from 'react';
import environment from '../config/env';

const BASE_IMAGE_URL = environment.BASE_IMAGE_URL;

export function Movie({ movie }) {
  useEffect(() => { console.log(movie.id) }, [])
  return (
    <div className="card mt-2" style={{ width: "25rem" }}>
      <img src={BASE_IMAGE_URL + movie.poster_path} height="256px" className="card-img-top img-responsive rounded mx-auto d-block" alt="cover" />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title || movie.title || movie.name}</h5>
        <p className="card-text">{movie.overview}</p>
      </div>
    </div>
  )
}

export default Movie;