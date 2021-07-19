import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./Help.css"


function About() {

    return (
    
        <Router>
            <Route>
        
    <div className="help" path="/help" >
        <h4 className="tituloHelp">ClimApp </h4>
        
        <p className="parrafos">Seccion de ayuda.</p>
        <p className="parrafos"> no puedo ayudarte</p>
        
        <br className="parrafos"/>

        <h4 className="tituloAbout"> mucho menos ahora</h4>
        <p className="parrafos">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sunt a illo, delectus veniam explicabo doloribus. Id tempore ea laudantium? Quidem quasi quaerat vitae repudiandae quae inventore quam facilis repellat? y los hábitats de flora y fauna silvestres, entre otros efectos.
        </p >
    </div>
    </Route>
    </Router>
    
    
    
    );
    };
    
    export default About;