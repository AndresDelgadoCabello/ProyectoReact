import brand from "../img/brand.jpg";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="tienda de mascotas" title="EL PERRITO CONTENTO"></img>
        </Link>
    )
}

export default Brand;