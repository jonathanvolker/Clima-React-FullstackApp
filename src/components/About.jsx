import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
            


function About() {

    return (
    
        <Router>
            <Route>
        
    <div className="about" path="/about" >
        <h4 className="tituloAbout">ClimApp </h4>
        
        <p className="parrafos">Es mejor leer el pronóstico del clima antes de orar por lluvia.</p>
        <p className="parrafos"> ClimApp es una webapp pensada para tener resultados rapidos y sin fallos desarrollada en el transcurso de la carrera en Henry y que de a poco va a ir adquiriendo mas funcionabilidad.</p>
        
        <br className="parrafos"/>

        <h4 className="tituloAbout">Un poco de conciencia</h4>
        <p className="parrafos">El clima del planeta ha experimentado cambios constantes a lo largo del tiempo geológico, entre ellos fluctuaciones significativas de las temperaturas medias globales.
        El calentamiento actual se está produciendo, sin embargo, más rápido que cualquier fenómeno pasado. Ha quedado claro que la mayor parte del calentamiento registrado durante el siglo pasado la hemos causado los seres humanos al emitir gases que retienen el calor —comúnmente denominados gases de efecto invernadero— para cubrir las necesidades energéticas de la vida moderna. Lo hacemos mediante la quema de combustibles fósiles, la agricultura, el uso de la tierra y otras actividades que provocan el cambio climático. Los gases de efecto invernadero se encuentran en su nivel más alto de los últimos 800.000 años. Este rápido aumento es un problema porque está cambiando nuestro clima a una velocidad demasiado alta para que los seres vivos podamos adaptarnos a ella.
        El cambio climático no sólo conlleva un aumento de las temperaturas, sino también fenómenos meteorológicos extremos, la elevación del nivel del mar y cambios en las poblaciones y los hábitats de flora y fauna silvestres, entre otros efectos.
        </p >
    </div>
    </Route>
    </Router>
    
    
    
    );
    };
    
    export default About;
    