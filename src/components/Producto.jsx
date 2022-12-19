import {
    Link,
    link
} from 'react-router-dom';

const Producto = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>Cantidad Disponible:{props.stock}</h2>
            <p>{props.description}</p>
            <Link to= 'Detalle/:name/:categoria'>
            <button>ver detalles</button>
            </Link>
        </div>
    )
}

export default Producto;