import React, {useEffect, useState} from "react";
import axios from "axios";

const link = " http://localhost:3000";

function App() {

  const [user, setUser] = useState([])
  
  const getUser = ()=>{
    axios
      .get(`${link}/users`)
      .then(response=>{
        setUser(response.data)
      })
      .catch(err=>{
        console.log(err.message)
      })
  }

  useEffect(() =>{
    getUser()
  }, [])

const getArray = ()=>{
  console.log(user)
}

const mapUser = user.map((usuario)=>{
return <li>{usuario.firstName}</li>
})

  return (
    <div>
     <button onClick={getArray}> Clica aqui</button>
     {mapUser}
    </div>
  );
}

export default App;
