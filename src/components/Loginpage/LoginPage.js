import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dessert from './Dessert.jpeg'
function LoginPage({setIsAuthenticated}) {
    const [email, setEmail] = useState("")
    const [password, setPwd] = useState("")
    const navigate = useNavigate();

    // When the user clicks the "LOGIN" button, the sendLoginDetails function is triggered:

    async function sendLoginDetails() {

        console.log(email, password);
        if (email === "sameera@gmail.com" && password === "123") {
            setIsAuthenticated(true)
            navigate("/")
        }
        else {
            alert("Incorrect username or password")
        }
    }
    return (
        <>
            <div className="container ">
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={Dessert} className='loginimage' />
                    </div>
                    <div className='col-md-6' style={{ backgroundColor: "rgb(239, 243, 251)" }}>
                        <h2 style={{ textAlign: "center", marginTop: "100px" }}> WELCOME </h2>

                        <div className="new" style={{ width: "500px", marginTop: "30px" }}>
                            <input type='text' className="username labelwidth" placeholder=" Phonenumber or email address" onChange={(e) => setEmail(e.target.value)} /><br />
                            <input type="password" className="pswd" placeholder=" Password" onChange={(e) => setPwd(e.target.value)} /><br />

                            <button className="btn btn-warning btns" onClick={sendLoginDetails}>LOGIN</button>
                        </div>
                    </div>
                </div>

            </div>




        </>
    )
}


export default LoginPage;