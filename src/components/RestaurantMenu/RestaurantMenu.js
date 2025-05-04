import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { CartContext } from "../../context/context";
const RestaurantMenu = () => {
  const { addToCart } = useContext(CartContext); // Get addToCart function useContext(CartContext) hook is used to access cart data in other components
  const [addedItems, setAddedItems] = useState({});

  const FoodMenu = [
    {
      items: [
        { id: 1, name: "Chicken 65", isVeg: false, price: 250, image: "https://tse1.mm.bing.net/th?id=OIP.3ueZre-bz-qeV410b4bdMwHaE7&pid=Api", },
        { id: 2, name: "Mutton Ghee Roast", isVeg: false, price: 360, image: "https://tse2.mm.bing.net/th?id=OIP.p4C6eb1c0Nd7Z5B4s5G2JQHaEK&pid=Api&P=0&h=180", },
        { id: 3, name: "Tandoori Chicken", isVeg: false, price: 250, image: "https://i.ytimg.com/vi/mZxDc5cCmp8/maxresdefault.jpg", },
        { id: 4, name: "Paneer Tikka", isVeg: true, price: 299, image: "https://thumbs.dreamstime.com/b/indian-starter-dish-paneer-tikka-kabab-barbecue-paneer-tikka-kabab-indian-starter-dish-paneer-tikka-kabab-barbecue-paneer-195539221.jpg", },
        { id: 5, name: "Chicken Biryani", isVeg: false, price: 340, image: "https://tse3.mm.bing.net/th?id=OIP.60NAPYbI0IhiISNAhs6ThgHaHa&pid=Api&P=0&h=180", },
        { id: 6, name: "Mushroom Biryani", isVeg: true, price: 270, image: "https://i.pinimg.com/originals/7f/c3/1b/7fc31b38a11fd2cd0ed9ca9836accdbb.png", },
        { id: 7, name: "Brinjal Biryani", price: 280, isVeg: true, image: "https://c2.staticflickr.com/6/5808/23075956489_9683f527da_z.jpg", },
        { id: 8, name: "Prawn Biryani", price: 330, isVeg: false, image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Karthika_Gopalakrishnan/Prawns_Biryani.jpg", },
      ],
    },
  ];
  const myProducts = [
    {
      img: "https://indiarestaurant.co.in/assets/images/features/CHINESE.jpg",
      item: "Chinese",
    },
    {
      img: "https://indiarestaurant.co.in/assets/images/features/MUGALI.jpg",
      item: "Mugulai",
    },
    {
      img: "https://indiarestaurant.co.in/assets/images/features/INDIAN.jpg",
      item: "Indian",
    }
  ]
  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems((prev) => ({ ...prev, [item.id]: true })); // Mark item as added

    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false })); // Reset after 2 seconds
    }, 2000);
  };


  return (
    <>

      {FoodMenu.map((menu, index) => {
        return (
          <div key={index}>
            <div className="container">
              <div className="row">
                {menu.items.map((item) => {
                  return (
                    <div className="col-3" style={{ padding: "30px" }}>
                      <div key={item.id} >

                        <div className="card animate">
                          <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "214px" }} />

                          <div className="card-body">
                            <span>{item.isVeg ? "🟢" : "🔴"}</span>
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text"> ₹{item.price}</p>
                          </div>
                          <button className="btn btn-warning" onClick={() => handleAddToCart(item)}>
                            {addedItems[item.id] ? "Added" : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>


        );
      })}

      
      {/* restaurant food speciality  */}
      <div className="container categories">
        <h3 className="textcenter">Our Speciality</h3>
        <p className="textcenter">We provide a wide range of cuisines and dishes to choose from so that every foodie in <br />town has their best experience with us.</p>
        <div className="row">
          {myProducts.map((ele, index) => {
            return (
              <div key={index} className="col-4 textcenter categories">

                <img src={ele.img} />

                <h4>{ele.item}</h4>
              </div>
            )
          }
          )} 
        </div>

      </div>

    </>

  );
};

export default RestaurantMenu;