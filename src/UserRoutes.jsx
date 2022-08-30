import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import ('Pages/Home/Home'));
const Movies = lazy(() => import ('Pages/Movies/Movies'));
const MovieDetails = lazy(() => import ('Pages/MovieDetails/MovieDetails'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));
const CastPage = lazy(() => import('Pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('./Pages/ReviewsPage/ReviewsPage'));

const UserRoutes = () => {
    return (
        <Suspense fallback ={<p>....Load page</p>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<MovieDetails />}>
                    <Route path="cast" element={<CastPage />}/>
                    <Route path="reviews" element={<ReviewsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;

