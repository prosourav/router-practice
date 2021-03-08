import { useEffect, useState } from 'react';
import User from '../User/User'


function Home() {
  const [user, setUser] = useState([]);
  useEffect(()=>{
  const url = 'https://jsonplaceholder.typicode.com/users';
  fetch(url)
  .then(res=>res.json())
  .then(data => setUser(data)); 
  },[]);
  return (
    <div>
      <header className="App-header">
        {
          user.map(user=> <User userInfo={user} key={user.id}></User>)
        }
      </header>
    </div>
  );
}

export default Home;
