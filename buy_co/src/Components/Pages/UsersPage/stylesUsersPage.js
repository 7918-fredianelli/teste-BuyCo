import styled from "styled-components";

export const MainPage = styled.main`
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 0;
    padding: 0;
    border: ${props => props.borda};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
`;

export const SelectOrder = styled.select`
    
`

export const User = styled.div`
    border: 1px solid black;
    padding: 4px;
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
`
export const DivButtonPages = styled.div`
    padding: 4px;
    display: flex;
    align-items: center;
`


export const ButtonUsers = styled.button`
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    display: block;
    margin: 0px 10px 0px 10px;
    color: rgba(0, 0, 0, 0.8);
`

export const ButtonPages = styled.button`
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    display: block;
    margin: 0px 10px 0px 10px;
    color: rgba(0, 0, 0, 0.8);

`