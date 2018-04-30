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
    </div>
  )
}

export default App
