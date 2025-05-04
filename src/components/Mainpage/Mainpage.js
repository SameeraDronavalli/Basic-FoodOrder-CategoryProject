import React from "react";
import { Link } from "react-router-dom";
function MyHomePage() {

    return (
        < >
                <div className="coloneeidt">
                    <img src="https://wallpaperaccess.com/full/1317125.png"  />
                </div>

                <h1 className="backgrdtext">When Flavours 😋Meet Passion, Magic Happens 💫</h1>
                <Link to="/details">
                    <button className="menubtn" >View Menu</button>
                </Link>

                <div className="row indiandishes">
                    <div className="col-6 foodtext">
                        <p style={{ textAlign: 'center', color: 'orange', fontSize: '20px' }}>Welcome To</p>
                        <h4 style={{ textAlign: 'center' }}> India Restaurant</h4>
                        <p className="foodparagraph">India Restaurant has been serving delightful experiences through the art of cooking for four decades. A cozy, relaxing space combined with flavourful dishes makes it a first choice for every foodie in town. It provides a wide range of items to choose from and lets everyone indulge in an experience of pleasing their taste buds.

                            <br />We provides a wide range of cuisines and dishes to choose from so that every foodie in town has their best experience here.</p>
                    </div>
                    <div className="col-6">
                        <img src="https://www.chennaispice.com/wp-content/uploads/2021/04/Untitled-design-16.jpg" className="foodimg" />
                    </div>
                </div>
       

        </>
    )
}
export default MyHomePage;