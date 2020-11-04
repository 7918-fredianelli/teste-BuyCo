import React, {useState, useEffect, useReducer}from "react";
import axios from "axios";
import {url} from "../../Others/Hooks/CustomHooks";

const initialState = {
    count: 1
};

const reducer = (state, action)=>{
    switch (action.type) {
      case "NEXT":
        if (state.count < 50) {
            return { count: state.count + 1 };
        }
        return { count: state.count + 0 };
      case "PREVIOUS":
        if (state.count > 1) {
          return { count: state.count - 1 };
        }
        return { count: state.count - 0 };
      default:
        return state;
    }
}

function UsersPage(){

    const [users, setUsers] = useState([])

    const [state, dispatch] = useReducer(reducer, initialState);

    const [input, setInput] = useState("")

	const onChangeId = (event) => {
		setInput(event.target.value)
	}

    const nextPage = () => dispatch({ type: "NEXT" });
    const previousPage = () => dispatch({ type: "PREVIOUS" });

    const getUsers = ()=>{
        axios
        .get(`${url}/users?_page=${(state.count).toString()}&_limit=10`)
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
    
    useEffect(()=>{
        if(state.count !== ""){
            getUsers()
        }
    }, [state])

    const getUsersById = ()=>{
        axios
        .get(`${url}/users/${input}`)
        .then((response)=>{
            setUsers(response.data)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    const filtra = users.map((user)=>{
        if(input !== ""){
            users.filter((user, id)=>{
                if(user.id === input){
                    return <div>{id}</div>
                }
            })
        }
        return <div>{user.firstName}</div>
    })


    return (
        <div>
           <div>
               <label>Filtrar por id</label>
               <input
                onChange={onChangeId}
                value={input}
                type={"number"}
               />
               {/* <button onClick={filtra}>Filtrar</button> */}
           </div>
            <div>
                <span>{state.count}</span>
                <button onClick={nextPage}>+</button>
                <button onClick={previousPage}>-</button>
            </div>
                {filtra}
        </div>
    )
}
export default UsersPage;