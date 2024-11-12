import React from 'react'
import styled from 'styled-components'
import Container from './styled/Container'
import Button from './styled/Button'
import Flex from './styled/Flex'

const Header = () => {
  return (
      <StyledHeader>
          <Container>
              <Nav>
                  <Logo src="./images/logo.svg"></Logo>
                  <Button >Try It Free</Button>
              </Nav>
              <Flex>
                  <div>
                      <h1>Build the community Your Fans will love</h1>

                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit suscipit accusantium a magnam fugit architecto aliquid voluptatum quas quod dignissimos dolor nihil, veniam, id nostrum eveniet. Sequi ad sit doloribus.

                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque neque excepturi rerum placeat ducimus atque nisi iste, consequatur distinctio? Animi, et! Odit, voluptatem molestias rem necessitatibus facere officia aperiam?
                      </p>

                      <Button>
                          Get Started for free
                      </Button>
                  </div>

                  <Image src="./images/illustration-mockups.svg"></Image>
              </Flex>
          </Container>
      </StyledHeader>
  )
}

const StyledHeader = styled.header`

 padding: 40px 0px;
`
const Nav = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 40px;


 
`
const Logo = styled.img`
 background-color:"white"
`
const Image = styled.img`
 background-color:"white";
 width:375px;
 margin-left: 40px;
`


export default Header