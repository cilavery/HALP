import React from 'react'
import AppBar from 'material-ui/AppBar';
import {Navbar} from './components'
import Routes from './routes'
import {Link} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Link to="/"><AppBar title="Halp!" id="app-bar-title"/></Link>
      <Routes />
      <div className="footer">
         <p>A Grace Hopper Academy Stackathon Project by Cecilia Avery</p>
      </div>
    </div>
  )
}

export default App
