import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import React from 'react'
import Search from "./components/Search";



function App() {


  return (
    <div>
      
      <BrowserRouter>
        <Category />
        <Search />
        <Pages />
        
        </BrowserRouter>
    </div>
  )
}

export default App
