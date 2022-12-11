import './css/styles.css';
import './css/normalize.css';
import Main from './components/main.jsx';
import React from 'react';
import{Route, Routes} from 'react-router-dom';
 
function App() {
  return (
    <React.Fragment>
  <Routes>
    <Route path='/' element={<Main/>} />
  </Routes>
   </React.Fragment>
  );
}

export default App;
