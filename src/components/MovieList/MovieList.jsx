import { Link, useLocation } from 'react-router-dom';


const MovieList = ({ items }) => {
    const location = useLocation();
    // console.log("Movie List location",location);
    const elements = items.map(({ id, title }) => <li key={id}>
        <Link state={{from: location}} to={`/movies/${id}`}>{title}</Link>
</li>)
    
    return (
            <ul>{elements}</ul>
        )
}

  
export default MovieList;
MovieList.defaultProps = {
    items: []
}