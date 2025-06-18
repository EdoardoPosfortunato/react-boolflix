import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieCard from '../components/MovieCrad.jsx'
import { GlobalContext } from '../context/GlobalContext.jsx';

const Home = () => {

    const { titolo, setTitolo, tipe, setTipe, gestisciSubmit, list, setList,        showList, setShowList, } = useContext(GlobalContext)



    return (
        <div className='container my-5'>
 
            {/* LISTA */}

            {showList &&
                <div className='d-flex justify-content-start overflow-auto'>
                    {list.map((curFilm, index) => (
                        <div className="card my-3 col-4 gap-1 mx-3" key={index}>
                        <MovieCard 
                        curItem = { curFilm } 
                        />
                        </div>
                    ))
                    }
                </div>
            }




        </div>
    );
};

export default Home;