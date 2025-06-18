import axios from "axios";
import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const [titolo, setTitolo] = useState('dragon trainer')
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

    const GlobalContextValue = {
        titolo,
        setTitolo,
        tipe,
        setTipe,
        list,
        setList,
        showList,
        setShowList,
        gestisciSubmit
    };

    return (
        <GlobalContext.Provider value={GlobalContextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContextProvider, GlobalContext };