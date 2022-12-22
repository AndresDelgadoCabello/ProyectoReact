import simuladorFetch from "./productos/SimuladorFetch";
import productos from "./productos/productos";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "../styles/containerCardsItems.css"
import { useParams } from "react-router-dom";

const ContainerCardItems = () => {
    const [ datos, setDatos ] = useState( [] );
    let {idcategoria} = useParams()

    useEffect(() => {
            if(idcategoria === undefined){
                simuladorFetch(productos, 1000)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
            } else {
                simuladorFetch(productos.filter(filter => filter.type === idcategoria ), 1000)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
            }
    }, [idcategoria])

    return(
        <div className="containerCardItems">
            {
                datos.map( product => (
                    <CardItem 
                        key={product.id}
                        id={product.id}
                        imagen={product.imageProduct.imagenProducto}
                        title={product.title}
                        cantidad={product.stock}
                        precio={product.price}
                    />  
                ))
            }
        </div>      
    )
}

export default ContainerCardItems;