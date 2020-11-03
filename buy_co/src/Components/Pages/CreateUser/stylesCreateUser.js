import styled from "styled-components";

export const MainPage = styled.main`
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 0;
    padding: 0;
    border: ${props => props.borda};
    display: ${props => props.display};
    grid-template-columns: ${props => props.coluna};
    grid-template-rows: ${props => props.linha};
`;