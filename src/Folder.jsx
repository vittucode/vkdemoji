import React from "react";

const Folder = ({ firstName, lastName, username, email, phoneNumber, Age }) => {



    // const {firstName,lastName,username,email,phoneNumber,Age }=props
    return (
        <>
            <h2>this is props</h2>
            <div>
                <h1>form details</h1>
                <p>firstName :{firstName}</p>
                <p>lastName :{lastName}</p>
                <p> username:{username}</p>
                <p>email :{email}</p>
                <p>phoneNumber :{phoneNumber}</p>
                <p>Age :{Age}</p>
            </div>
        </>
    );
};

export default Folder;