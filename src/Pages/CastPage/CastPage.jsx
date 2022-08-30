import { useState, useEffect } from 'react';
import {  useParams,} from 'react-router-dom';
import { fetchCredits } from 'components/FetchApi/FetchApi';
import styles from './CastPage.module.css'


const CastPage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const { id } = useParams();
    
    useEffect(() => {
        const fetchMovie = async () => {
            
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }))
                const result = await fetchCredits(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        items: result.cast,
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

  

    const { items } = state;
    const elements = items.map(({ id, name, character, profile_path }) => (
        <li key={id} className={styles.castList}>            
            <div className={styles.castListImg}>   
                <img
                        src={'https://image.tmdb.org/t/p/w500' + profile_path}
                        alt={name}
                        width={`50px`}
                />
            </div> 
            <div className={styles.castListInfo}> 
                <h3>{name}</h3>
                <p>Character: {character}</p>
            </div>  
        </li>
    ));
        
    return (
        <div className="container">
            <h4>Cast</h4>
            <ul>{elements}</ul>
        </div>
    
    )
   
}

export default CastPage;