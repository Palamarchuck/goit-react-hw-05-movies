import { useState, useEffect } from 'react';
import { fetchPopular } from 'components/FetchApi/FetchApi';
import MovieList from '../../components/MovieList/MovieList'
// import styles from './Home.module.css'

const Home = () => {

    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    })
    
    useEffect(() => {
        const fetchMoviePopular = async () => {
            
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }))
                const result = await fetchPopular();
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...prevState.items, ...result]
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
        fetchMoviePopular();
    }, []);

    const { items, loading, error } = state;
    
    return (
        <div className="container">
            <h2>Popular movie</h2>
            {items.length > 0 && <MovieList items={items} />}
            {loading && <p>...load popular movie</p>}
            {error && <p>...Popular movies load failed</p>}
        </div>
    
    )
}
export default Home;