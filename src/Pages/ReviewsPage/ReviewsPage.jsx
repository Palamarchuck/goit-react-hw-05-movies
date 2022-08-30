import { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import { fetchReviews } from 'components/FetchApi/FetchApi';


const ReviewsPage = () => {
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
                const result = await fetchReviews(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        items: result.results,
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
    const elements = items.map(({ id, author, content  }) => (
        <div key={id}>            
            <h3>{author}</h3>
            <p>{content}</p>
        </div>
    ));
        
    return (
        <div className="container">
            <h4>Reviews</h4>
            <ul>{elements}</ul>
        </div>
    
    )
   
}


export default ReviewsPage;