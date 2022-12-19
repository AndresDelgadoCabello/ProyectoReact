import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Products from "./Pages/Products";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";

function App () {
    return (
<BrowserRouter>
<NavBar />
    <Routes>
    <Route exact path= '/' element={<ItemListContainer/>}/>
    <Route path= "Products" element={<Products/>}/>
    <Route path= 'Detalle/:name/:categoria' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>)
    }


export default App;