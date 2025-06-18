import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import MainLayout from './layout/MainLayout'
import ProvaPagina from './pages/ProvaPagina'
import { GlobalContextProvider, GlobalContext } from './context/GlobalContext'
GlobalContextProvider

function App() {

  return (
    <>
      <GlobalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/Prova" element={<ProvaPagina />} />
            </Route>
            {/* <Route path="*" element={<Page404 />} /> */}
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  )
}

export default App
