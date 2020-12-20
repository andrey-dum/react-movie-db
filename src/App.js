import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import SingleMovie from './components/SingleMovie/SingleMovie'

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/movies/:id' children={<SingleMovie />} />
    </Switch>
  )
}

export default App