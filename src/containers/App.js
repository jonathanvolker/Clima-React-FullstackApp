import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About';
import Ciudad from '../components/Ciudad';
import Help from "../components/Help"

const apiKey = 'b8bf21e1ecab91caaf4ede68ac9e58b8';

function App() {

const[cities,setCities] = React.useState([]);
//este seria el estado del componente que lo va a usar
//en city voy a almacenar las ciudades que busque
function onSearch(ciudad) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
  //promesa >>pedido al servidor 
    .then(r => r.json())    
    //promesa >>transformo la info que llega a json para que quede como obj                                              
    .then((recurso) => {
      //
      //console.log(recurso)
      
      if(recurso.cod === 200){//condicional solo para verificar si la data de la API tiene info
          const ciudad = {
                        min: Math.round(recurso.main.temp_min),
                        max: Math.round(recurso.main.temp_max),
                        img: recurso.weather[0].icon,
                        id: recurso.id,
                        wind: recurso.wind.speed,
                        temp: recurso.main.temp,
                        name: recurso.name,
                        weather: recurso.weather[0].main,
                        clouds: recurso.clouds.all,
                        latitud: recurso.coord.lat,
                        longitud: recurso.coord.lon
                      };
        setCities(oldCities => [...oldCities, ciudad]);
        /*llamo a setCities agarro el estado anterior(oldCities) y le agrego la nueva ciudad
        donde setCities me cambiaria el estado y estaria guardando en cities la ciudaid 
        solicitada a la API
      
        */
      }else {
             alert("Ciudad no encontrada");
      }
    });
    
  }

function onClose(id){
    setCities(oldCities => oldCities.filter(city=>city.id !== id));
/*  recorro el arreglo de ciudades y saco la que NO me coincida con el id      */ 
 }
  //onFIlter se ocupa de filtrarme la ciudad por id.
function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    
    if(ciudad.length > 0) {
          return ciudad[0];
    } else {
          return null;
    }
  }
//Router path=/ (se muestra en todas las rutas, por eso esta el nav)
//Router path=/about (solo muestra lo que este en esa ruta por eso component about)
return (

    <>
      <div className="App">
      
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />}
        />

      <Route 
        exact path ="/"
        render={()=> <Cards cities={cities} onClose={onClose} />}
        />

        <Route
        path='/about'
        component={About}
      />
      <Route
        path="/help"
        component={Help}
        />
      
        <Route
        exact
        path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad
        city={onFilter(match.params.ciudadId)}
            />}
      />
  
      </div>
      </>
); } //en <Nav> estoy trasladando onSearch hasta Nav le paso a Card el arreglo del estado osea (cities)*/
  //match usando render> le tengo que pasar si o si el match,histori o location, en este caso destructuring y solo match
  //por eso le paso solo el match en onFilter

  /* cuando usamos render o component se genera un obj 
  con MATCH;HISTORY  LOCATION 
  pasa que en component los pasa auto
  y en render necesito pasarselos si necesito usarlos por fuera del componente
  en caso de querer usar los parametros dentro del componente usar la pop React-dom useParams()*/

export default App;
