import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [titolo, setTitolo] = useState('')


  // axios
  //     .get(`https://api.themoviedb.org/3/search/movie?query=harry&api_key=a137869a6b96dbe44e7dda9ab3f49734`)
  //     .then((resp) => {
  //       console.log(resp);})



  return (
    <>
      <div className='container my-5'>
        <h1>Inserisci un titolo</h1>
        <form className='d-flex'>
          <div className="form-floating">
            <label htmlFor="search">Inserisci un titolo</label>
            <input
              className='form-control'
              type="text"
              placeholder='...inserisci un titolo qui'
              value={titolo}
              onChange={(e) => { setTitolo(e.target.value) }}
              id = 'search'
            />
          </div>
          <button className='btn btn-primary ms-3'>cerca</button>
        </form>
      </div>
    </>
  )
}

export default App
