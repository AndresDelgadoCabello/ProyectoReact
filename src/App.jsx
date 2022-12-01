import React from "react";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function app () {
    return (
        <div>
        <NavBar />
        <ItemListContainer saludo = "Bienvenido a la tienda favorita de su mascota"/>
        </div>
    )
    
}

export default app;