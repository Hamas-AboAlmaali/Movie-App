import { useSelector } from 'react-redux'
import NoWatchList from '../components/NoWatchList';


const WatchList = () => {
    const count = useSelector(state => state.counter.count);
    const watchListMovies = useSelector(state => state.counter.cart_items);


    if (!Number(count)) {
        return (
            <NoWatchList />
        )
    } else {
        return (
            <>

                <div className="container mt-5">
                    <h1>Watch List</h1>
                    <hr></hr>
                </div>

                <div className='container'>
                    {
                        watchListMovies.map((movie) => {
                            return (
                                <>
                                    <div className="row container m-5">

                                        <div className="col-5">
                                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                                        </div>

                                        <div className="col-7 ">
                                            <h2>{movie.title}</h2>
                                            <p className="text-warning">{movie.release_date}</p>
                                            <div>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star unchecked"></span>
                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;{movie.vote_count}</span>
                                            </div>
                                            <p className="mt-5">{movie.overview}</p>

                                        </div>
                                    </div>
                                    <hr/>
                                </>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default WatchList