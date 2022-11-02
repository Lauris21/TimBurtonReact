import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

import App from './App'
import Home from "./pages/Home";
import Finder from "./pages/Finder";
import FormMovies from "./pages/FormMovie";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />} >
        <Route index element={<Home />} />
        <Route path='/finder' element={<Finder />} />
        <Route path='/formMovies' element={<FormMovies />} />
        <Route path='/moviesGallery' element={<Movies />} />
        <Route path='/moviesGallery/:id' element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
