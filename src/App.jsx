import './style.css';
import NavBar from './components/NavBar';
import ContainerCardItems from './components/ContainerCardItems';
import { BrowserRouter,
        Route,
        Routes } from "react-router-dom";
import ItemsDetailContainer from './components/ItemsDetailContainer';

function App() {
return (
    <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path='/' element={ <ContainerCardItems />} />
                <Route path='/item/:idItem' element={ <ItemsDetailContainer />} />
                <Route path='/categoria/:idcategoria' element={ <ContainerCardItems />} />
            </Routes>
    </BrowserRouter>
);
}
export default App;