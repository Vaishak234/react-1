import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header';
import content from './components/content'
import Container from './components/styled/Container'
import Card from './components/Card';
import Footer from './components/Footer';
import GlobalStyle from './components/styled/GlobalStyle';
import ColorSwitcher from './components/ColorSwitcher';
import { useState } from 'react';






function App() {


  const [color, setColor] = useState(localStorage.getItem('color'))
  
  const theme = {
    mobile: '768px',
    background: color,
    color:"white"
  }
   
     
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ColorSwitcher color={color} setColor={setColor} />
      <Header />     
      <Container>

        
        {
          content.map((item, index) => (
         
            
        
                <Card key={index} item={item}/>
          
          ))
          }
      </Container>
     
      <Footer />
    </ThemeProvider>
  );
}

export default App;
