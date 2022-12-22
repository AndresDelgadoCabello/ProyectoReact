import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul className="">
            <li>
                <Link to="categoria/juguetes para gatos"> 
                    {props.itemUno} 
                </Link>
            </li>
            <li>
                <Link to="categoria/juguetes para perros">
                    {props.itemDos}
                </Link>
            </li>
            <li>
                <Link to="categoria/comida para perros">
                    {props.itemTres}
                </Link>
            </li>
            <li>
                <Link to="categoria/comida para gatos">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;