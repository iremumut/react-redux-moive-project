import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import ActorsPage from './components/ActorsPage/ActorsPage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PageNotFound from './components/404';
import MoviesType from './components/MoviesPage/MoviesType';

function App() {
  return (
    <div >
      <NavBar />
      <Routes>
        <Route element={<MoviesPage/>} path="/movies" /> 
        <Route element={<MoviesType type="popular"/>} path="/movies/popular" />      
        <Route element={<MoviesType type="topRated"/>} path="/movies/topRated" />      
        <Route element={<MoviesType type="upcoming"/>} path="/movies/upcoming" />      
        <Route element={<MoviesType type="trending"/>} path="/movies/trending" />      
        <Route element={<ActorsPage/>} path="/actors" />
        <Route element={<HomePage/>} path="/" />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
