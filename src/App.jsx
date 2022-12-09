import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App () {
    return (
<BrowserRouter>
<NavBar />
    <Routes>
        <Route exact path= '/' element={<Home/>}/>
        <Route path= "Products" element={<Products/>}/>
        <Route path= "Detalles/:name/:categoria " element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>)
}

export default App;