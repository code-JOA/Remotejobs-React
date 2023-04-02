import React from 'react'
import Jobs from './Components/JobDiv/Jobs'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchDiv/Search'
import Value from './Components'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Search/>
      <Jobs/>
      <Value/>


    </div>

  //   <h1 className="text-3xl font-bold underline">
  //   Hello world!
  // </h1>

  )
}

export default App

