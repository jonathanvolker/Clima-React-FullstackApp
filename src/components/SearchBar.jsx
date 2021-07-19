import React from "react";

export default function SearchBar({onSearch}) {
  
const [city,setCity] = React.useState("");//useState devuelve un arreglo
//donde la 1er pos es la variable y en la 2da una Fn que sabe modificar la variable
  return (
    <form onSubmit={(e) => {//cuando haya un evento 
      e.preventDefault();//esto es para que lno renderize default
      onSearch(city);//llamo a onSearch y le paso las cities acumuladas
      setCity(""); //asi se autoborra el input
      //
    }}>

      <input
       id="Input"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e=>setCity(e.target.value)}//seteo un eventlistener
        //onChange siempre que se modifica el valor delimput, agarra el value y ejecuta setCity
        //e.target.value es el valor del evento que devuelve el mismo.

      />
      <input 
      id="InputButton"
      type="submit" 
      value="Agregar" />
      { /*el input dispara un event tipo submit porque es el boton
        type submit es para capturar el valor del input*/
      
      
      } 
    </form>
  );
}
