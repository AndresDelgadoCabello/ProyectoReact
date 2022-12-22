import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />
            </div>

            <nav className="containerItemList">
                <ItemListContainer
                    itemUno = "juguetes para gatos"
                    itemDos = "juguetes para perros"
                    itemTres = "comida para perros"
                    itemCuatro = "comida para gatos"
                />
            </nav>
            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;