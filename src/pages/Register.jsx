import React from "react";
import AddImage from '../img/addImage.png'
const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat Application</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="display name"></input>
                    <input type="email" placeholder="email"></input>
                    <input type="password" placeholder="password"></input>
                    <input style={{display:'none'}} type="file"></input>
                    <label htmlFor="file">
                        <img src={AddImage} alt="">
                            
                        </img>
                        <span>Add an avatar</span>
                    </label>
                    <button>
                        Sign Up
                    </button>
                </form>
                <p>You do have an account ? Login </p>
            </div>
        </div>
    )
}

export default Register;
