import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';
import { fetchByQuery } from 'components/FetchApi/FetchApi';
import MovieList from 'components/MovieList/MovieList';
import styles from './Movies.module.css'


const Movies = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    })

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search");
    console.log(search)


    // const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                }));
                const data = await fetchByQuery(search);
                setState(prevState => ({
                    ...prevState,
                    items: data,
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            }
            finally {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                }))
            }
        }
        if (search)
            fetchMovies( )
    }, [search])

    const changeSearch = ({search}) => {
        // setSearch(search)
        setSearchParams({query: search})
    }

    const { items } = state;

    return (
        <div className="container">
            <h2>Movies page</h2>
            <MovieSearchForm onSubmit={changeSearch} />
            {items.length > 0 && <MovieList items={items} />}
        </div>
        
    )
}
export default Movies;