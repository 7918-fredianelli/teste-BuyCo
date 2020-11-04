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

    const [order, setOrder] = useState("")

	const onChangeOrder = (event) => {
		setOrder(event.target.value)
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

    const orderNameAZ = (a,b)=>{
        return (a.firstName > b.firstName) ? 1 :
        ((b.firstName > a.firstName) ? -1 : 0);
    }
    const orderNameZA = (a,b)=>{
        return (b.firstName > a.firstName) ? 1 :
        ((a.firstName > b.firstName) ? -1 : 0);
    }

    const orderLowerId = (a,b)=>{
        return a.id - b.id
    }
    const orderHigherId = (a,b)=>{
        return b.id - a.id
    }

    switch(order){
        case 'OrderAZ':
            users.sort(orderNameAZ)
            break;
        case 'OrderZA':
            users.sort(orderNameZA)
            break;
        case 'LowestId':
            users.sort(orderLowerId)
            break;
        case 'BiggestId':
            users.sort(orderHigherId)
            break;
        default: ;
    }

    return (
        <div>
             <select onChange={onChangeOrder} value={order}> 
                        <option value="">Ordenar por: </option>
                        <option value="OrderAZ">Ordem alfábetica de A-Z</option>
                        <option value="OrderZA">Ordem alfabética de Z-A</option>
                        <option value="LowestId">Menor Id</option>
                        <option value="BiggestId">Maior Id</option>
                    </select>
            <div>
                <span>{state.count}</span>
                <button onClick={nextPage}>+</button>
                <button onClick={previousPage}>-</button>
            </div>
            {users.map((user)=>{
                return <div>{user.firstName}</div>
            })}
        </div>
    )
}
export default UsersPage;