import styled from "styled-components";



const Flex = styled.div`
 display: flex;
 align-items: center;
 color: ${({theme})=>theme.color};

 &>div, &>ul{
    flex: 1;
 }

 @media (max-width:${({ theme }) => theme.mobile}){
    flex-direction: column;
    gap: 30px;
 }

`

export default Flex