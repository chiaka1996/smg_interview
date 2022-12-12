/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';

const Template = ({title}) => {
    const [movies, setMovies] = useState([])

    const FetchMovies = async() => {
      console.log(process.env.REACT_APP_MOVIE)
        const httpRequest = await fetch(process.env.REACT_APP_MOVIE+`&s=${title}`);
        const result = await httpRequest.json()

        if(result){
          console.log(result.Search)
          setMovies([...result.Search])
        }
    }

    useEffect(() => {
        FetchMovies()
    },[])
    return(
        <section className='movieContainer'>
        <div className='category'>{title}</div>
        <div className='titleContainer'>
        {movies.map((e, i) => <div key={i} style={{backgroundImage: `url(${e.Poster})`}} className='movieBox'>
          </div>
          )}
        </div>
      </section>
    
    )
}

export default Template;