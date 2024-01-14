import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { LanguageContext } from "../context/Language";



const Header = () => {
    const count = useSelector(state => state.counter.count)

    const {language, setLangauge} = useContext(LanguageContext)

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <span className="navbar-brand">Movies App</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/movie/popular" className={({ isActive }) =>
                                isActive ? "active nav-link" : "pending nav-link"
                            }> Movie-List </NavLink>

                            <NavLink to="/watch-list" className={({ isActive }) =>
                                isActive ? "active nav-link" : "pending nav-link"
                            }> Watch List ( <span>{count}</span> )</NavLink>

                            <NavLink to="/login" className={({ isActive }) =>
                                isActive ? "active nav-link" : "pending nav-link"
                            }> Login </NavLink>

                            <NavLink to="/register" className={({ isActive }) =>
                                isActive ? "active nav-link" : "pending nav-link"
                            }> Register </NavLink>

                            <NavLink className={({ isActive }) =>
                                isActive ? "active nav-link" : "pending nav-link"
                            } onClick={()=> setLangauge("en")}> English</NavLink> 

                            <NavLink className={({ isActive }) =>
                                isActive ? "active nav-link" : "pending nav-link"
                            } onClick={()=> setLangauge('ar')}> Arabic </NavLink>                   

                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header