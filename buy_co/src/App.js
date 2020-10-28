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
        console.log(response.data)
        console.log(user)
      })
      .catch(err=>{
        console.log(err.message)
      })
  }

  useEffect(() =>{
    getUser()
  }, [])

  return (
    <div>
     <button> Clica aqui</button>
    </div>
  );
}

export default App;
