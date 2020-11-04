import React from "react";
import {form, handleInputChange} from "./CreateUser";

function AddressComponent(props){

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
                    value={props.resgisterAddress.zipCode}
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
                    value={props.resgisterAddress.city}
                    onChange={props.handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Rua:</label>
                <input
                    name="streetAddress"
                    placeholder="25 de Março"
                    pattern={"[A-Za-z]{3,}"}
                    title="O nome deve ter no mínimo 3 letras"
                    value={props.resgisterAddress.streetAddress}
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
                    value={props.resgisterAddress.country}
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
                    value={props.resgisterAddress.state}
                    onChange={props.handleInputChange}
                    required
                />
                </div>
        </div>
    )
}
export default AddressComponent;