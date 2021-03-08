import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UserDetail = () => {
const {data} = useParams();
const[user, setUser] = useState({});
useEffect(()=>{
  const url =  `https://jsonplaceholder.typicode.com/users/${data}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=> setUser(data));
},[])
    return (
        <div>
           <h1>This is user Detail component id:{data}</h1>
           <h2>Name: {user.name}</h2>
           <h2>Phone: {user.phone}</h2>
           <h2>Email: {user.email}</h2>
        </div>
       
    );
};

export default UserDetail;