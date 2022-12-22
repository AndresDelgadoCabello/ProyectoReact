import Image from "./Image";
import Description from "./Description";
import "../styles/ItemsDetailContainer.css";
import AddCantCart from "./AddCantCart";
import ButtonDetalles from "./Buttondetalles";
import simuladorFetch from "./productos/SimuladorFetch";
import productos from "./productos/productos";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemsDetailContainer = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {
        simuladorFetch(productos.filter( flt => flt.id == idItem), 1000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])
    return(
        <div className="ItemsDetailContainer">
            {
                datos.map( items => (
<>
                    <div className="containerLeft">
                        <Image 
                            imagen={items.imageProduct.imagenProducto}
                        />
                    </div>  
                    <div className="containerRigth">
                            <Description 
                                title= {items.title}
                                parrafo= {items.description}
                                cantidad = {items.stock}
                                precio={items.price}
                            />
                        <div className="buttons">
                                <AddCantCart 
                                    cant={3}
                                />
                                <ButtonDetalles 
                                    txt="Agregar al carro"
                                />
                        </div>
                    </div>
</>
                ))
            }
        </div>
    )
}

export default ItemsDetailContainer;