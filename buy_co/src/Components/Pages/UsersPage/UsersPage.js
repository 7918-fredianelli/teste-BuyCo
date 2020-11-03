import React, {useState, useEffect}from "react";
import axios from "axios";
import {url} from "../../Others/Hooks/CustomHooks";

function UsersPage(){

    const [users, setUsers] = useState([])

    const getUsers = ()=>{
        axios
        .get(`${url}/users`)
        .then((response)=>{
            setUsers(response.data)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    useEffect(()=>{
        getUsers()
    }, [])



    return (
        <div>
            <button>Pega Usuários</button>
            <ul>
                {users.map((user)=>{
                   return <li>{user.firstName}</li>
                })}
            </ul>
        </div>
    )
}
export default UsersPage;