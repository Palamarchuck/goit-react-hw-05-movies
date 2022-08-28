import { Routes, Route } from 'react-router-dom';
import Home from 'Pages/Home/Home';
import Movies from 'Pages/Movies/Movies';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default UserRoutes;