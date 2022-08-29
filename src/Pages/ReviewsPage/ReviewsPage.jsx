import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { fetchById } from 'components/FetchApi/FetchApi';


const ReviewsPage = () => {
    // const { id } = useParams();
    // const navigate = useNavigate();
    
    // const [state, setState] = useState({
    //     item: {},
    //     loading: false,
    //     error: null,
    // })
    
    // useEffect(() => {
    //     const fetchMovie = async () => {
            
    //         try {
    //             setState(prevState => ({
    //                 ...prevState,
    //                 loading: true,
    //                 error: null,
    //             }))
    //             const result = await fetchById(id);
    //             setState(prevState => {
    //                 return {
    //                     ...prevState,
    //                     item: result,
    //                 }
    //             })
    //         } catch (error) {
    //             setState(prevState => ({
    //                 ...prevState,
    //                 error,
    //             }))
    //         }
    //         finally {
    //             setState(prevState => {
    //                 return {
    //                     ...prevState,
    //                     loading: false,
    //                 }
    //             })
    //         }
    //     };
    //     fetchMovie();
    // }, [id, setState]);

    // const goBack = () => navigate(-1)

    // const { original_title, overview, poster_path, genres, vote_average } = state.item;
    // console.log(state.item);
        
    return (
        <div className="container">
            {/* <button onClick={goBack}>Go back</button>
            <h2>MovieDetails</h2>
            <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title} width={`200px`} />
            <h3>{original_title}</h3>
            <p>Rating: {vote_average}</p>
            <h4>Overview</h4>
            <p>{overview}</p>
            <Link to={`/movies/${id}/cast `}>Cast</Link>
            <Link to= {`/movies/${id}/reviews `}>Reviews</Link> */}
            {/* <p>Genres: {genres}</p> */}
            ReviewsPage
        </div>
    
    )
   
}
export default ReviewsPage;