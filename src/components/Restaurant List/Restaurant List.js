import React from "react";
import { Link } from "react-router-dom";

// import FooterPage from "../Footer/Footer";
function RestaurantList() {
    const restaurantLists = [{
        name: "Barkas Restaurant",
        rating: "4.1🟊🟊🟊",
        symbol: <i class="fa-solid fa-star-half fa-2xs"></i>,
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/o/t/p48995-15792597365e219758d57dc.jpg?tr=tr:n-xlarge",

    },
    {
        name: "Gismat Restaurant",
        rating: "3.8🟊🟊",
        symbol: <i class="fa-solid fa-star-half fa-2xs"></i>,
        image: "https://i.ytimg.com/vi/2eicP4J7tcA/maxresdefault.jpg",

    },
    {
        name: "Deccan Pavilion",
        rating: "3.9🟊🟊",
        symbol: <i class="fa-solid fa-star-half fa-2xs"></i>,
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/09/b5/d7/caption.jpg?w=1000&h=-1&s=1",
    },
    {
        name: "Gummadi Grand",
        rating: "4.3🟊🟊🟊",
        symbol: <i class="fa-solid fa-star-half fa-2xs"></i>,
        image: "https://www.saumitrainternational.com/wp-content/uploads/2019/07/WhatsApp-Image-2018-11-06-at-09.11.20.jpeg",
    },
    ]
    return (
        <>
            <div class="container">
                <div class="row">
                    {restaurantLists.map((copyoflists) => {
                        return (
                            <div class="col-3">
                                <div class="card animate">
                                    <img src={copyoflists.image} class="card-img-top" style={{ height: "214px" }} />
                                    <div class="card-body" style={{ height: "141px" }}>
                                        <h5 class="card-title">{copyoflists.name}</h5>
                                        <p class="card-text">{copyoflists.rating}{copyoflists.symbol}</p>
                                        <Link to="/barkas">
                                        <a href="#" class="btn btn-primary">Order Now</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* <FooterPage/> */}
        </>
    )
}
export default RestaurantList;