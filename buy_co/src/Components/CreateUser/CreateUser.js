import React, {useState} from "react";
import {useForm} from "../Hooks/CustomHooks";
import {Main} from "./stylesCreateUser";

function CreateUser(){

    const { form, onChange } = useForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        profissao: "",
        nacionalidade: "",
        idViagens: ""
    });
    
    const handleInputChange = event => {
      const { name, value } = event.target;
  
      onChange(name, value);
    };

    const abc = (event)=>{
        event.preventDefault()
        console.log("Abc")
    }
    return(
        <Main>
            <form onSubmit={abc}>
                <div>
                <label>Primeiro Nome:</label>
                <input
                    name="firstName"
                    placeholder="João"
                    pattern={"[A-Za-z]{3,}"}
                    title="O nome deve ter no mínimo 3 letras"
                    value={form.firstName}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Sobrenome:</label>
                <input
                    name="lastName"
                    placeholder="Silva"
                    pattern={"[A-Za-z]{3,}"}
                    title="O nome deve ter no mínimo 3 letras"
                    value={form.firstName}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Email:</label>
                <input
                    name="email"
                    placeholder="joaosilva@email.com"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Telefone:</label>
                <input
                    name="phone"
                    placeholder="Ex: +55 (31) 99123-456"
                    value={form.phone}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <button>Inscrever-se</button>
            </form>
        </Main>
    )    
}
export default CreateUser;