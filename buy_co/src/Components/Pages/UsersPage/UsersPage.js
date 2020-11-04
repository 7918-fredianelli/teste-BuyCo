import React, {useState, useEffect, useReducer}from "react";
import axios from "axios";
import {url} from "../../Others/Hooks/CustomHooks";
import EditUser from "./EditUser";
import {MainPage, User, ButtonUsers, ButtonPages, DivButtonPages} from "./stylesUsersPage";

const initialState = {
    count: 1
};

const reducer = (state, action)=>{
    switch (action.type) {
      case "NEXT":
        if (state.count < 51) {
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

const bananinha = ""

function UsersPage(){

    const [users, setUsers] = useState([]);

    const [state, dispatch] = useReducer(reducer, initialState);

    const [order, setOrder] = useState("");

    const [edit, setEdit] = useState(false);

    const [stateUser, setStateUser] = useState("")

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
        getUsers()    
    }, [state, edit])

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

    const deleteUser = (name, id)=>{
        if(window.confirm("Deseja realmente excluir esse usuário?")){
            axios
            .delete(`${url}/users/${id}`)
            .then(()=>{
                alert(`Usuário ${name} excluido com sucesso!`)
            })
            .catch((error)=>{
                console.log(error.message)
            })
        }
        {getUsers()}
    }

    const editUser = (user)=>{
        setStateUser(user)
        setEdit(true)
    }
    return (
        <MainPage>
            {edit === false ?
             <select onChange={onChangeOrder} value={order}> 
                        <option value="">Ordenar por: </option>
                        <option value="OrderAZ">Ordem alfábetica de A-Z</option>
                        <option value="OrderZA">Ordem alfabética de Z-A</option>
                        <option value="LowestId">Menor Id</option>
                        <option value="BiggestId">Maior Id</option>
                    </select> : ""}

            
                {edit === false ? users.map((user)=>{
                    return <User>
                                <ButtonUsers onClick={()=>editUser(user)}>Detalhes</ButtonUsers>
                                {user.firstName} {user.lastName}
                                <ButtonUsers onClick={()=>deleteUser(user.firstName, user.id)}>Deletar Usuário</ButtonUsers>
                        </User>
                }) : <EditUser setEdit={setEdit} stateUser={stateUser}/>}
                

           {edit === false ? <DivButtonPages>
                <ButtonPages onClick={previousPage}><strong>&larr;</strong></ButtonPages>
                <ButtonPages>{state.count}</ButtonPages>
                <ButtonPages onClick={nextPage}><strong>&rarr;</strong></ButtonPages>
            </DivButtonPages> : ""
            }
        </MainPage>
    )
}
export default UsersPage;