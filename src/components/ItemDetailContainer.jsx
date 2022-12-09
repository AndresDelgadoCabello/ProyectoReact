import {
    useParams
} from 'react-router-dom';

function ItemDetailContainer () {
    const { name, categoria } = useParams();
    return (
        <h1>Detalle del producto {name} / {categoria}</h1>
    )
}

export default ItemDetailContainer;