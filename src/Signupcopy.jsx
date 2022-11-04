import React from "react";
import { useState } from "react";
import Folder from "../src/Folder"

// import { Link } from "react-router-dom";

const Signupcopy = () => {
    const [firstName,setfirstName]=useState();
    const [lastName,setlastName]=useState();
    const [username,setuserName]=useState();
    const [email,setemail]=useState();
    const [phoneNumber,setphoneNumber]=useState();
    const [age,setage]=useState();
    const [show,setshow]=useState(false);

    const buttonclick=() =>{
        setshow(true)
    }

    const firstnameChange=(e) => {
        setfirstName(e.target.value)
    }

    const lastnamechange=(e) => {
        setlastName(e.target.value)
    }

    const usernamechange=(e) => {
        setuserName(e.target.value)
    }

    const emailchange=(e) => {
        setemail(e.target.value)
    }

    const phonenumberchange=(e) => {
        setphoneNumber(e.target.value)
    }
    
    const agechange=(e) => {
        setage(e.target.value)
    }



    return (
        <>
        <div className="bg-white ">
            <div className="border rounded-md shadow px-12 py-10 mb-6 grid  grid-cols2 mx-96 gap-4">
                <img src="https://geeks.madrasthemes.com/wp-content/uploads/2021/10/logo-icon.svg" alt="logo" />
                <h1 className="font-bold text-4xl py-4">Sighupcopy</h1>
                <p>Already have an account?  <span className="text-blue-500">Sign in</span></p>
                <label className="">First Name</label>
                <input type="text" placeholder="First Name" className="border rounded py-3 px-2" onChange={firstnameChange} />

                <label className="">Last Name</label> 
                <input type="text" placeholder="Last Name" className="border rounded py-3 px-2" onChange={lastnamechange}/>

                <label>Username</label> 
                <input type="text" placeholder="Username" className="border rounded py-3 px-2" onChange={usernamechange} />

                <label>Email</label> 
                <input type="text" placeholder="Email" className="border rounded py-3 px-2" onChange={emailchange}/>

                <label>Phone Number</label> 
                <input type="text" placeholder="Phone Number"className="border rounded py-3 px-2" onChange={phonenumberchange}/>

                <label>Age</label> 
                <input type="text" placeholder="Age"className="border rounded py-3 px-2"onChange={agechange} />

                <button className="bg-blue-700 py-2 rounded-md text-white font-bold"onClick={buttonclick}>Show</button>
            </div>
            
        </div>
 
        {/* { show ? <div>
            <h1>form details</h1>
            <p>firstName :{firstName}</p>
            <p>lastName :{lastName}</p>
            <p> username:{username}</p>
            <p>email :{email}</p>
            <p>phoneNumber :{phoneNumber}</p>
            <p>Age :{Age}</p>
        </div>:<p>no data found</p>} */}

       {show ? <Folder firstName={firstName} lastName={lastName} username={username}  email={email} phoneNumber={phoneNumber} Age={age}/>:<p>no data faound</p>}

        </>
    );
}; 

export default Signupcopy;