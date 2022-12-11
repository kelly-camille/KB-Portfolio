import './css/styles.css'
import './css/normalize.css'
import { Route } from 'react-router-dom'
import Main from './components/main.jsx'
import React from 'react'

function App() {
  return (
    <React.Fragment>

    <Route path='/' component={Main} />

   </React.Fragment>
  );
}

export default App;
