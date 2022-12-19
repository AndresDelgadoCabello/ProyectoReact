
import {
    useParams
} from 'react-router-dom';

// uso del hook useParams.//

function ItemDetailContainer () {
    const { name, categoria } = useParams();
    return (
        <h1>Detalles del producto</h1>
    )
}

export default ItemDetailContainer;