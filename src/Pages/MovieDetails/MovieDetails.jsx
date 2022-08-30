import { useState, useEffect,  } from 'react';
import { Link, useParams, useNavigate, Outlet, useLocation} from 'react-router-dom';
import { fetchById } from 'components/FetchApi/FetchApi';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const location = useLocation();
    // console.log("Movie details", location.state);
    const from  = location.state?.from || "/movies";
    
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

    const goBack = () => navigate(from)

    const { original_title, overview, poster_path, genres, vote_average } = state.item;
    const genresMain = genres?.reduce((str, genre) => {
    return str + `${genre.name} `;
  }, '');

    return (
        <div className={styles.container}>
            <button onClick={goBack} className={styles.btn}>Go back</button>
            <div className={styles.main}>
                {/* <h2>MovieDetails</h2> */}
                <div className="mainImg">
                    <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title} width={`200px`} />
                </div>
                <div className={styles.mainInfo}>
                    <h3>{original_title}</h3>
                    <p>Rating: {vote_average}</p>
                    <h4>Overview</h4>
                    <p>{overview}</p>
                    <h4>Genres</h4>
                    <p>{genresMain}</p>
                </div>
            </div>
            <div className={styles.info}>
                <h4>Additional information</h4>
                <ul>
                    <li><Link state={{from}} to={`/movies/${id}/cast `}>Cast</Link></li>
                    <li><Link state={{from}} to= {`/movies/${id}/reviews `}>Reviews</Link></li>
                </ul>
                <Outlet />
            </div>
        </div>
        
    
    )
   
}
export default MovieDetails;