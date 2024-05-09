import photo from "./no-fav.png"


const NoWatchList = () => {

    return (
        <>
            <div className="container mt-5">
                <h5>Watch List</h5>
                <hr/>
            </div>

            <div className="container my-5  d-flex justify-content-center ">
                <div style={{textAlign: "center"}}>
                <img src={photo} alt="" />
                <h1>No Movies in Watch List</h1>
                <button type="button" className="btn btn-warning px-5 my-5"> Back To Home </button>
                </div>
            </div>
        </>
    )
}

export default NoWatchList