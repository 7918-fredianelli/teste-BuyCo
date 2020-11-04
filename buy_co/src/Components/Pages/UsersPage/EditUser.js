import React , {useState, useEffect}from "react";
import axios from "axios";
import {useForm, url} from "../../Others/Hooks/CustomHooks";

function EditUser(props){
    
    const { form, onChange } = useForm({

        firstName: props.stateUser.firstName,
        lastName: props.stateUser.lastName,
        email: props.stateUser.email,
        phone: props.stateUser.phone,
        // adress: {
        //     zipCode: props.stateUser && props.stateUser.adress.zipCode,
        //     city: props.stateUser && props.stateUser.adress.city,
        //     streetAdress: props.stateUser && props.stateUser.adress.streetAdress,
        //     country: props.stateUser && props.stateUser.adress.country,
        //     state: props.stateUser && props.stateUser.adress.state,
        //     geo: {
        //         latitude: "",
        //         longitude: ""
        //     },
        // }
    });

    console.log(props.stateUser)

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
            adress : {
                zipCode: form.zipCode,
                city: form.city,
                streetAdress: form.streetAdress,
                country: form.country,
                state: form.state,
                geo: {
                    latitude: "",
                    longitude: ""
                }
            }
        }
        axios
        .put(`${url}/users/${props.stateUser.id}`, body)
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
                    type="number"
                    placeholder="Ex: +55 (31) 99123-456"
                    value={form.phone}
                    onChange={handleInputChange}
                    required
                />
                </div>
                {/* <div>
                <label>Código postal:</label>
                <input
                    name="zipCode"
                    type={"number"}
                    placeholder="33-444-333"
                    pattern={"[A-Za-z]{3,}"}
                    title="O nome deve ter no mínimo 3 letras"
                    value={form.adress.zipCode}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Cidade:</label>
                <input
                    name="city"
                    placeholder="Taguatinga"
                    pattern={"[A-Za-z]{3,}"}
                    title="O nome deve ter no mínimo 3 letras"
                    value={form.adress.city}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Rua:</label>
                <input
                    name="streetAdress"
                    placeholder="25 de Março"
                    pattern={"[A-Za-z]{3,}"}
                    title="O nome deve ter no mínimo 3 letras"
                    value={form.adress.streetAdress}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>País:</label>
                <input
                    name="country"
                    placeholder="Brasil"
                    pattern={"[A-Za-z]{3,}"}
                    title="O nome deve ter no mínimo 3 letras"
                    value={form.adress.country}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Estado:</label>
                <input
                    name="state"
                    placeholder="Minas Gerais"
                    pattern={"[A-Za-z]{3,}"}
                    title="O nome deve ter no mínimo 3 letras"
                    value={form.adress.state}
                    onChange={handleInputChange}
                    required
                /> */}
                {/* </div> */}
                 <button onClick={volta}>Editar usuário</button>
            </form>
        </div>
    )
}
export default EditUser;