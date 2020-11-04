import React , {useState, useEffect}from "react";
import axios from "axios";
import {useForm, url} from "../../Others/Hooks/CustomHooks";

function EditUser(props){
    
    const { form, onChange } = useForm({

        firstName: props.stateUser.firstName,
        lastName: props.stateUser.lastName,
        email: props.stateUser.email,
        phone: props.stateUser.phone,
        address: {
            zipCode: props.stateUser && props.stateUser.address.zipCode,
            city: props.stateUser && props.stateUser.address.city,
            streetAddress: props.stateUser && props.stateUser.address.streetAddress,
            country: props.stateUser && props.stateUser.address.country,
            state: props.stateUser && props.stateUser.address.state,
            geo: {
                latitude: "",
                longitude: ""
            },
        }
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
    
        onChange(name, value);
    };

    const volta = ()=>{
        props.setEdit(false)
    }
    const getUserById = ()=>{
        const body ={
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            address : {
                zipCode: form.address.zipCode,
                city: form.address.city,
                streetAddress: form.address.streetAddress,
                country: form.address.country,
                state: form.address.state,
                geo: {
                    latitude: "",
                    longitude: ""
                }
            }
        }
         if(window.confirm("Deseja alterar esse usuário?")){
            axios
            .put(`${url}/users/${props.stateUser.id}`, body)
            .then(()=>{
                alert(`Usuário ${form.firstName} alterado com sucesso!`)
                volta()
            })
            .catch((error)=>{
                console.log(error.message)
            })
        }
    }

    return(
        <div>
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
                    placeholder="Ex: +55 (31) 99123-456"
                    value={form.phone}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Código postal:</label>
                <input
                    name="zipCode"
                    placeholder="33-444-333"
                    title="O nome deve ter no mínimo 3 letras"
                    value={form.address.zipCode}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Cidade:</label>
                <input
                    name="city"
                    placeholder="Taguatinga"
                    title="O nome deve ter no mínimo 3 letras"
                    value={form.address.city}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Rua:</label>
                <input
                    name="streetAddress"
                    placeholder="25 de Março"
                    title="O nome deve ter no mínimo 3 letras"
                    value={form.address.streetAddress}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>País:</label>
                <input
                    name="country"
                    placeholder="Brasil"
                    title="O nome deve ter no mínimo 3 letras"
                    value={form.address.country}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Estado:</label>
                <input
                    name="state"
                    placeholder="Minas Gerais"
                    title="O nome deve ter no mínimo 3 letras"
                    value={form.address.state}
                    onChange={handleInputChange}
                    required
                />
                </div>
                 <button onClick={getUserById}>Editar usuário</button>
            </form>
        </div>
    )
}
export default EditUser;