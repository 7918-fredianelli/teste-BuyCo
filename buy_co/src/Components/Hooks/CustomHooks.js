import React from "react";
import {useHistory} from "react-router-dom";

const useUrl = get =>{
    const history = useHistory();
    const route = ()=>{
       history.push(get)
    }
    return [route]
 }
 export default useUrl