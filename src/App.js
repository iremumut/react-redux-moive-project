import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import ActorsPage from './components/ActorsPage/ActorsPage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PageNotFound from './components/404';

function App() {
  return (
    <div >
      <NavBar />
      <Routes>
        <Route element={<MoviesPage/>} path="/movies" />
        <Route element={<ActorsPage/>} path="/actors" />
        <Route element={<HomePage/>} path="/" />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
