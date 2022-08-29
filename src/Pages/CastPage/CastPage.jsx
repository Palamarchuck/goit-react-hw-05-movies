import { useState, useEffect } from 'react';
import { Link, useParams,} from 'react-router-dom';
import { fetchCredits } from 'components/FetchApi/FetchApi';


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
        <li key={id}>            
                <img
                    loading="lazy"
                    src={'https://image.tmdb.org/t/p/w500' + profile_path}
                    alt={name}
                    width={`50px`}
                />
            <h3>{name}</h3>
            <p>{character}</p>
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