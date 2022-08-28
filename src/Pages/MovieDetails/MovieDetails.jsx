import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from 'components/FetchApi/FetchApi';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
    const { id } = useParams();
    
    const [state, setState] = useState({
        item: {},
        loading: false,
        error: null,
    })
    
    useEffect(() => {
        const fetchMovie = async () => {
            
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }))
                const result = await fetchById(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        item: result,
                    }
                })
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                    }
                })
            }
        };
        fetchMovie();
    }, [id, setState]);


    const { original_title, overview, poster_path, genres, vote_average } = state.item;
    console.log(state.item);
    // const genre = genres.map(({name}) => (
    //     <li>{name }</li>
    // ))
    // console.log(genre);
    
    return (
        <div className="container">
            {/* <button onClick={navigate(-1)}>Go back</button> */}
            <h2>MovieDetails</h2>
            <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title} width={`200px`} />
            <h3>{original_title}</h3>
            <p>Rating: {vote_average}</p>
            <h4>Overview</h4>
            <p>{overview}</p>
            
            {/* <p>Genres: {genres}</p> */}
        </div>
    
    )
   
}
export default MovieDetails;