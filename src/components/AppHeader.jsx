import { useContext } from "react"
import { GlobalContext, GlobalContextProvider } from "../context/GlobalContext"



const NavbarHeader = () => {

    const { titolo, setTitolo, tipe, setTipe, gestisciSubmit, list, setList, showList, setShowList, } = useContext(GlobalContext)


    return (
        <>
            <nav className="navbar navbar-expand d-flex">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
                    <input
                        className='form-control'
                        type="text"
                        value={titolo}
                        onChange={(e) => { setTitolo(e.target.value) }}
                        id='search'
                    />
                    {/* <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="movieBtn" value="movie" onChange={(e) => setTipe(e.target.value)} checked={tipe === 'movie'} />
                        <label className="form-check-label" htmlFor="movieBtn">Film</label>
                    </div> */}
                    {/* <div className="form-check form-check-inline d-flex flex-column">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="seriesBtn" value="tv" onChange={(e) => setTipe(e.target.value)} checked={tipe === 'tv'} />
                        <label className="form-check-label" htmlFor="seriesBtn">Serie TV</label>
                    </div> */}
                    <button className='btn btn-primary my-3' onClick={gestisciSubmit}>cerca</button>
                </div>
            </nav>
        </>
    )


}


export default NavbarHeader