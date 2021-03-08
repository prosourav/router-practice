import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './User.css'


const User = (props) => {
    // console.log(props.userInfo);
    const {name,username,website,id} = props.userInfo;
    const {city,zipcode} = props.userInfo.address;
    const style ={color:'red'};
    const history = useHistory();
    const handleClick = (userId)=>{
        const url =`/about/${userId}`
        history.push(url)
    }
    return (
        <div className="mydiv">
            <h1>Name: {name}</h1>
            <h2>Username :  <Link to={`/about/${id}`}>{username}</Link></h2>
            <h2>Id : {id} </h2>
            <h2>City :{city}</h2>
            <p style={style}>Email : {website}</p>
            <button onClick={()=>handleClick(id)}>Details</button>
           
        </div>
        
    );
};

export default User;

// 