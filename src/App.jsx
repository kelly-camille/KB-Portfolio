import './css/styles.css';
import './css/normalize.css';
import Main from './components/main.jsx';
import React from 'react';
import{Route} from 'react-router-dom';
 
function App() {
  return (
    <React.Fragment>

    <Route path='/' component={Main} />

   </React.Fragment>
  );
}

export default App;
