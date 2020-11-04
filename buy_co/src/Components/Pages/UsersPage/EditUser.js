import React , {useState, useEffect}from "react";

function EditUser(props){

    const volta = ()=>{
        props.setEdit(false)
    }

    return(
        <div>
            Olá!!
            <button onClick={volta}>Volta</button>
        </div>
    )
}
export default EditUser;