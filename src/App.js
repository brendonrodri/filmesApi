/* import React from "react"
import Header from "./components/header/header"
import Main from "./components/main/main"

import {Routes, Route, BrowserRouter} from "react-router-dom"
import Filmes from "./components/filmes/filmes"
import Series from "./components/series/series" */


/* export default function App (){
  return(
    <BrowserRouter>
      
      <Header/>
     
    


      <Routes>

        <Route path="/" element={ <Main />} />
        <Route path="/filmes" element={  <Filmes />} />
        <Route path="/series" element={<Series />} />

      </Routes>
     
    </BrowserRouter>
  )
} */

import React from "react"
import Filmes from "./components/filmes/filmes"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import Main from "./components/main/main"
import Series from "./components/series/series"

export default function App (){
  return(
    <>
      <Header />
      <Main />
      <Filmes />
      <Series />
      <Footer />
    </>
  )
}