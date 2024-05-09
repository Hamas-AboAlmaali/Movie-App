import axiosInstance from "../apis/config"
import { useEffect, useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addMovieToWatchList, removeMovieFromWatchList } from '../store/slices/counter';
import { useContext } from "react";
import { LanguageContext } from "../context/Language";
import 'react-circular-progressbar/dist/styles.css';
// import axios from "axios";

const MovieList = () => {
    const watchListMovies = useSelector(state => state.counter.cart_items);
    const dispatch = useDispatch();

    const {language} = useContext(LanguageContext)

    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axiosInstance.get(`/3/movie/popular?api_key=2b27740c4bfafcda0cd7cef43bc6734c&language=${language}`)
            .then((res) => {
                setMovies(res.data.results)
            })
            .catch(err => { console.log(err) })
    }, [language])


    return (
        <>
            <div className="container mt-5">
                <h1>Popular Movies</h1>
                <hr></hr>
            </div>
            <div className="row justify-content-around">
                {
                    movies.map((movie) => {
                        const isFavourite = watchListMovies?.some((item) => item.id === movie.id)

                        const toggleWatchList = (e) => {
                            e.stopPropagation()
                            isFavourite ? dispatch(removeMovieFromWatchList(movie)) : dispatch(addMovieToWatchList(movie))
                        }
                        return (
                            <div className="card p-3 my-4 mx-4" style={{ "width": "18rem" }} onClick={() => navigate(`/movie/${movie.id}`)}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div style={{ width: 50, height: 70, marginTop: 40 }} className="m-0">
                                        <CircularProgressbar value={movie.vote_average * 10} text={`${movie.vote_average * 10}%`} />
                                    </div>
                                    <h3 className="card-title">{movie.original_title}</h3>
                                    <span className="card-text text-warning">{movie.release_date}</span>
                                    <span>
                                        {
                                            isFavourite ? <span className="fa fa-heart m-4 favourite" onClick={toggleWatchList}></span> : <span className="fa fa-heart m-4" onClick={toggleWatchList}></span>
                                        }
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MovieList