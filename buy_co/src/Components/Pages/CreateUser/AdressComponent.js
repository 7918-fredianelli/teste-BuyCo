import React from "react";
import {form, handleInputChange} from "./CreateUser";


function AdressComponent(props){

    return(
        <div>
            <div>
                <label>Código postal:</label>
                <input
                    name="zipCode"
                    type={"number"}
                    placeholder="33-444-333"
                    pattern={"[A-Za-z]{3,}"}
                    title="O nome deve ter no mínimo 3 letras"
                    value={props.resgisterAdress.zipCode}
                    onChange={props.handleInputChange}
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
                    value={props.resgisterAdress.city}
                    onChange={props.handleInputChange}
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
                    value={props.resgisterAdress.streetAdress}
                    onChange={props.handleInputChange}
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
                    value={props.resgisterAdress.country}
                    onChange={props.handleInputChange}
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
                    value={props.resgisterAdress.state}
                    onChange={props.handleInputChange}
                    required
                />
                </div>
        </div>
    )
}
export default AdressComponent;