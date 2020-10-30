import styled from "styled-components";

export const Head = styled.header`
  grid-row: 1/2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  color:   #28325d;
  border: 1px solid  rgba(40, 50, 93, 0.2);
  height: 100%;
  >*{
    margin: 0 25px;
  }
`

export const Title = styled.h1`
  cursor: pointer;
  font-size: 30px;
`

export const TitlePoint = styled.span`
  font-size: 20px;
  color: #009cb4;
`

export const But = styled.button`
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    display: block;
    margin: 0px 50px 0px 0px;
    height: 50%;
    width: 8%;
    color: rgba(0, 0, 0, 0.8);
`