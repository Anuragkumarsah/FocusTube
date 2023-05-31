import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player'
import SearchBar from './components/SearchBar'
import Search_Home from './components/Search_Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Search_Home />
      {/* <Player /> */}
    </div>
  )
}

export default App
