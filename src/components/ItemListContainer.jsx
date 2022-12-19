import { useState } from "react";
import Producto from "./Producto"

function ItemListContainer() {
    const [productos, setProductos] = useState([
        {   id: 1,
            name: "bebedero",
            description:"bebedero para agua",
            stock: 10,

        },
        {
            id: 2,
            name: "pelota",
            description:"pelota para jugar",
            stock: 5,
        },
        {
            id: 3,
            name: "rascador",
            description:"rascador para gatos",
            stock: 10,
        },
        {
            id: 4,
            name: "juguete",
            description:"juguete para gatos",
            stock: 10,
        }
    
    ]);
    return (
        <div>
            <h1>CATALOGO</h1>
            {productos.map((item) =>
            <Producto
            name={item.name}
            description={item.description}
            stock={item.stock}
            />
            )}

        </div>
    );
}

    export default ItemListContainer;
    