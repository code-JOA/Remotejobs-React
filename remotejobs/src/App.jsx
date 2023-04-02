import React from 'react'
import Footer from './Compo'
import Jobs from './Components/JobDiv/Jobs'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchDiv/Search'
import Value from './Components/ValueDiv/Value'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>

    </div>

  //   <h1 className="text-3xl font-bold underline">
  //   Hello world!
  // </h1>

  )
}

export default App

