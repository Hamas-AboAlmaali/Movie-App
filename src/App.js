// import Header from "./components/Header";
// import NotFound from "./pages/Not-found";
// import Movies from './pages/Movies';
// import MovieList from "./pages/Movie-List";
// import MovieDetails from "./pages/Movies-details";
// import Register from "./pages/Register";
// import WatchList from "./pages/Watch-List";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageContext } from "./context/Language";
import React, { Suspense, useState } from "react";

const Header = React.lazy(() => import('./components/Header'))
const MovieList = React.lazy(() => import('./pages/Movie-List'))
const MovieDetails = React.lazy(() => import('./pages/Movies-details'))
const Register = React.lazy(() => import('./pages/Register'))
const WatchList = React.lazy(() => import('./pages/Watch-List'))
const NotFound = React.lazy(() => import('./pages/Not-found'))

function App() {
  const [language, setLangauge] = useState();
  return (
    <Suspense>
      <LanguageContext.Provider value={{ language, setLangauge }}>
        
          <BrowserRouter>
            <Header />
            <div className="" dir={`${language === "ar" ? "rtl" : "ltr"}`}>
            <Routes>
              <Route path="/movie/popular" element={<MovieList />}></Route>
              <Route path="/movie/:id" element={<MovieDetails />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/watch-list" element={<WatchList />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes></div>
          </BrowserRouter>
        
      </LanguageContext.Provider>
    </Suspense>
  );
}

export default App;
