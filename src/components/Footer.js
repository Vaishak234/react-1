import React from 'react'
import Container from './styled/Container'
import Flex from './styled/Flex'
import styled from 'styled-components'

const Footer = () => {
  return (
      <Container>
          <img src="./images/logo_white.svg" alt="" />

          <Flex >
              <StyleLinks >
                 <li><a href="/about">About</a></li>
                 <li><a href="/help">Help</a></li>
                 <li><a href="/privacy">Privacy</a></li>
                 <li><a href="/terms">Terms</a></li>
                 <li><a href="/locations">Locations</a></li>
                 <li><a href="/language">Language</a></li>
             </StyleLinks>
             <FooterCopyRight>
               © {new Date().getFullYear()} Huddle
             </FooterCopyRight>
          </Flex>
      </Container>
  )
}

const StyleLinks = styled.ul`
 display: flex;
 color: white;
 gap: 20px;
 flex: 1;

 li{
    list-style: none;
 }

 a{
    color: white;
    text-decoration: none;
 }
 
 
`
const FooterCopyRight = styled.p`
 text-align: end;
 color:white
 
`

export default Footer