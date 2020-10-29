import React from "react";
import useUrl from "../Hooks/CustomHooks";
import {useHistory} from "react-router-dom";

function UsersPage(){
    const history = useHistory();
    // const teste = ()=>{
    //     history.push("signup")
    // }
    const [goToSignUp] = useUrl("/signup")
    return (
        <div>
            <div>Olá Mundo!</div>
    
            <button onClick={goToSignUp}>Abc</button>
        </div>
    )
}
export default UsersPage;