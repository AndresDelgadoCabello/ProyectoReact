import CartWidget from "./CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {
  Link,
  link
} from 'react-router-dom';

const NavBar = (nombre) => {
    return (
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tienda "La mascota contenta"</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to= '/'>
        <li class="nav-item">Home</li>
        </Link>
        <Link to= 'Products'>
        <li class="nav-item">Productos</li>
        </Link>
        <li class="nav-item dropdown">
        </li>
        <li class="nav-item">
        </li>
      </ul>
<div>
    <CartWidget />
</div>
    </div>
  </div>
  <div>
  </div>
</nav>
    )
}
export default NavBar;