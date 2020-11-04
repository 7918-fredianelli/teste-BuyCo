import React, {useState} from "react";
import {useForm, url} from "../../Others/Hooks/CustomHooks";
import {MainPage} from "./stylesCreateUser";
import axios from "axios";
import AddressComponent from "./AddressComponent";

function CreateUser(){
    const [address, setAddress] = useState(false);

    const resgisterAddress = {
        address : {
            zipCode: "",
            city: "",
            streetAddress: "",
            country: "",
            state: "",
            geo: {
                latitude: "",
                longitude: ""
            }
        }
    }

    const { form, onChange } = useForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resgisterAddress
    });
    
    const handleInputChange = event => {
      const { name, value } = event.target;
  
      onChange(name, value);
    };

    const create = (event)=>{
        event.preventDefault()
        const body ={
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            address : {
                zipCode: form.zipCode,
                city: form.city,
                streetAddress: form.streetAddress,
                country: form.country,
                state: form.state,
                geo: {
                    latitude: "",
                    longitude: ""
                }
            }
        }
        axios
        .post(`${url}/users`, body)
        .then(()=>{
            alert(`Ùsuário ${form.firstName} criado com sucesso!`)
        })
        .catch(err=>{
            alert(`Houve um erro ${err.message}`)
        })
    }

    const rendersAddress = (event)=>{
        event.preventDefault()
        setAddress(true)
    }

    const dontRendersAddress = (event)=>{
        event.preventDefault()
        setAddress(false)
    }

    return(
        <MainPage>
            <form>
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
                    value={form.lastName}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Email:</label>
                <input
                    name="email"
                    type="email"
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
                    type="number"
                    placeholder="Ex: +55 (31) 99123-456"
                    value={form.phone}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                    <label>Deseja cadastrar o endereço agora?</label>
                    <button onClick={rendersAddress}>Sim</button>
                    <button onClick={dontRendersAddress}>Não</button>
                </div>
                {address === true ? <AddressComponent resgisterAddress= {form.resgisterAddress} handleInputChange={handleInputChange}/> : ""}
                <button onClick={create}>Criar Usuário</button>
            </form>
        </MainPage>
    )    
}
export default CreateUser;