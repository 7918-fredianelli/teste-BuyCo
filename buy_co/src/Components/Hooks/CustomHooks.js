import React, {useState} from "react";
import {useHistory} from "react-router-dom";

export const useUrl = get =>{
    const history = useHistory();
    const route = ()=>{
       history.push(get)
    }
    return [route]
 };

 
export const useForm = initialValues => {
 
   const [form, setForm] = useState(initialValues);
 
   const onChange = (name, value) => {
     const newForm = { ...form, [name]: value };
     setForm(newForm);
   };
 
   return { form, onChange };
 };
