import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  //envuelvo toda la app en BrowserRouter para poder usarlo
  <Router>  

        <App />
  
  </Router>,
  document.getElementById('root')
);
