import { useParams } from "react-router-dom";
import axiosInstance from "../apis/config"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/Language";


const MovieDetails = () => {
    const [movie, setMovie] = useState([])
    const params = useParams();

    const {language} = useContext(LanguageContext)


    useEffect(() => {
        axiosInstance.get(`/3/movie/${params.id}?api_key=2b27740c4bfafcda0cd7cef43bc6734c&language=${language}`)
            .then((res) => {
                setMovie(res.data)
            })
            .catch(err => { console.log(err) })
    }, [language])
    
    return (
        <>
            <div className="container mt-5">
                <h1>Movie Details</h1>
                <hr></hr>
            </div>

            <div className="row container m-5">

                <div className="col-5">
                <img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
                </div>

                <div className="col-7">
                    <h2>{movie.title}</h2>
                    <p className="text-warning">{movie.release_date}</p>
                    <div>
                    <span className = "fa fa-star checked"></span>
                    <span className = "fa fa-star checked"></span>
                    <span className = "fa fa-star checked"></span>
                    <span className = "fa fa-star checked"></span>
                    <span className = "fa fa-star unchecked"></span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;{movie.vote_count}</span>
                    </div>
                    <p className="mt-5">{movie.overview}</p>
                    <div>

                        {
                            movie.genres?.map((item) => {
                                return(
                                    <>
                                        <button type="button" className="btn btn-warning my-5 mx-3">{item.name}</button>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <span style={{fontWeight: "bold" }}>Duration: &nbsp;&nbsp;</span>
                            <span>{movie.runtime} min</span>
                        </div>
                        <div className="col-4">
                            <span style={{fontWeight: "bold" }}>Language: &nbsp;&nbsp;</span>
                            <span>
                                {
                                    movie.spoken_languages?.map((item) => {
                                        return(
                                            <span>{item.name} &nbsp;&nbsp;</span>
                                        )
                                    })
                                }
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        {
                            movie.production_companies?.map((logo) => {
                                return(
                                        <img src = {`https://image.tmdb.org/t/p/w500${logo.logo_path}`} alt = "" className="my-5 mr-5 col-4" style={{maxHeight: 60}}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetails