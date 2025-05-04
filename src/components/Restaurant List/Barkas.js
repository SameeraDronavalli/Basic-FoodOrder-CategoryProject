import axios from 'axios'
import React, { useState, useEffect } from "react";

function Barkas() {

  const [receipe, setReceipe] = useState([])
  const [filteredlist, setFilteredList] = useState([])
  const [dish, setDish] = useState("")

  async function RestaurantItem() {
    const url = await axios.get("https://dummyjson.com/recipes")
    const response = url.data
    console.log(response.recipes)
    setReceipe(response.recipes)
  }

  //getting default data we include the function in useEffect

  useEffect(() => {

    RestaurantItem(receipe);
  }, []);
  
  //filter applying to cuisine
  useEffect(() => {
    if (dish === "") {
      setFilteredList(receipe);
    } else {
      const filteredItems = receipe.filter((copyofitem) => {
        return copyofitem.cuisine === dish;
      })
      //updating the filter items
      setFilteredList(filteredItems)
      console.log("filetered list data here", filteredlist)
    }
  }, [dish, receipe]); //dependency array updates the particular state only 

  //when i click on filterdata, based on filter the items are changed

  function getItems(items) {
    console.log(items.target.value, 'items clicked ')
    setDish(items.target.value)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className='col-2'>
            <h4>Filters</h4>
            <select onChange={getItems}>
              <option value="">Select Items</option>
              <option>Indian</option>
              <option>Italian</option>
              <option>Smoothie</option>
              <option>Turkish</option>
              <option>Asian</option>
              <option>Mexican</option>
              <option>Russian</option>
              <option>Mediterranean</option>
              <option>Moroccan</option>
             
              <option>Brazilian</option>
              <option>Lebanese</option>
              <option>Thai</option>
            </select>
          </div>
          <div className='col-10'>
          {/* looping filtered data here*/}
          <div className='row'>
          {filteredlist.map((copyofreceipe) => {
            return (
              <div className="col-4">
                <img src={copyofreceipe.image} className="image" />
                <div className='textbtnchanges'>
                  <h6 class="card-text">{copyofreceipe.name}</h6>
                  <p class="card-title">🟊{copyofreceipe.rating}</p>
                  <a href="#" class="btn btn-primary">Order Now</a>
                </div>
              </div>
            )
          })}
          </div>
          
        </div>
        </div>
      </div>
    </>
  );
}

export default Barkas;
