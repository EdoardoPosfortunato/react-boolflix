import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const Home = () => {

    const [titolo, setTitolo] = useState('')
    const [tipe, setTipe] = useState('movie')
    const [list, setList] = useState()
    const [showList, setShowList] = useState(false)

    const gestisciSubmit = (e) => {
        e.preventDefault();
        axios
            .get(`https://api.themoviedb.org/3/search/${tipe}?query=${titolo}&api_key=a137869a6b96dbe44e7dda9ab3f49734`)
            .then((resp) => {
                console.log(resp.data.results);
                setList(resp.data.results)
                setShowList(true)
            })
    }

    return (
        <div className='container my-5'>
            <h1>Inserisci un titolo</h1>
            {/* FORM */}
            <form className='my-5' onSubmit={gestisciSubmit}>
                <div className="form-floating">
                    <input
                        className='form-control'
                        type="text"
                        value={titolo}
                        onChange={(e) => { setTitolo(e.target.value) }}
                        id='search'
                    />
                    <label htmlFor='search'>Inserici il titolo</label>
                    <div className='my-4'>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="movieBtn" value="movie" onChange={(e) => setTipe(e.target.value)} checked={tipe === 'movie'} />
                            <label className="form-check-label" htmlFor="movieBtn">Film</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="seriesBtn" value="tv" onChange={(e) => setTipe(e.target.value)} checked={tipe === 'tv'} />
                            <label className="form-check-label" htmlFor="seriesBtn">Serie TV</label>
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary my-3'>cerca</button>
            </form>

            {/* LISTA */}

            {showList &&
                <div className='d-flex flex-wrap justify-content-between'>
                    {list.map((curFilm, index) => (
                        <div className="card my-3 col-5" key={index}>
                            {/* <img src="..." className="card-img-top" alt="..."/> */}
                            <div className="card-body">
                                <h5 className="card-title">{curFilm.title}</h5>
                                <p className="card-text">Titolo originale: {curFilm.original_title}</p>
                                <p className="card-text">Lingua: {curFilm.original_language}</p>
                                <p className="card-text">Voto: {curFilm.vote_average}</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    ))
                    }
                </div>
            }




        </div>
    );
};

export default Home;