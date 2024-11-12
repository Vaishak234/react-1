import styled from "styled-components";


const Button = styled.button`
  border-radius: 50px;
  border:none;
  cursor:pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({bg})=> bg || "white"};
  color: ${({ color }) => color || "black"};
  

  &:hover{
    opacity: .9;
    transform: scale(0.98);
  }

`

export default Button