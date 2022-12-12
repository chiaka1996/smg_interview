import Banner from './Banner'
import React, {useState} from 'react';

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [movies, setMovies] = useState([])

    const onChangeValue = (e) => {
        const value = e.target.value;
        setSearchValue(value)
    }

    const FetchMovies = async() => {
        console.log(process.env.REACT_APP_MOVIE)
          const httpRequest = await fetch(process.env.REACT_APP_MOVIE+`&s=${searchValue}`);
          const result = await httpRequest.json()
  
          if(result){
            console.log(result.Search)
            setMovies([...result.Search])
          }
      }

      const keypress = (e) => {
        if (e.key === 'Enter'){
            FetchMovies()
        }
      }
    return(
        <div>
            <Banner />  
            <section className='sectionBody'>
                <div>
                <label className='search'>Search</label><br/>
                <input 
                type='text'  
                className='searchInput' 
                value={searchValue}
                onChange={onChangeValue}
                onKeyDown={keypress}
                />
                </div>
            </section> 

            <div className='filmContainer'>
                {movies.map((film, i) => <div key={i} style={{backgroundImage: `url(${film.Poster})`}} className='filmgrid'>
                </div>)}
            </div>        
        </div>
    )
}

export default Search;