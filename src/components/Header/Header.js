import React, { useContext } from 'react'; // creating apps function
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/context';
function HeaderPage({isAuthenticated}) {
  const { cart } = useContext(CartContext);
  const cartCount = cart.length; // Count total items in the cart
  
  
  return (
    <>

      <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top navigating">

        <div class="container-fluid">
          <nav class="navbar bg-body-tertiary">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img src="https://indiarestaurant.co.in/assets/images/logo/white-black.png" class="faviconimg" alt="Bootstrap" width="84" height="84" />
              </a>
            </div>
          </nav>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <a class="navbar-brand" href="#">Home</a></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/details" style={{ textDecoration: 'none' }}>
                  <a class="nav-link active" aria-current="page" href="#">Restaurant Menu</a>
                </Link>
              </li>
              {isAuthenticated  && ( <li class="nav-item">
                <Link to="/list" style={{ textDecoration: 'none' }}>
                  <a class="nav-link active" aria-current="page" href="#">Restaurant List</a>
                </Link>

              </li>
              )}
              <li class="nav-item">
                <Link to="/cart" class="cartsize" style={{ textDecoration: 'none' }}>
                  <i class="fa-solid fa-cart-shopping"></i>
                  {cartCount > 0 && (
                    <span className="cart-count">{cartCount}</span>
                  )}
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login" class="cartsize" style={{ textDecoration: 'none', color: "black", marginLeft: "100px" }}>
                  👤 Logout
                </Link>
              </li>

            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}
export default HeaderPage;
