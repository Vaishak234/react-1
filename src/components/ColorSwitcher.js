import styled from 'styled-components'

const ColorSwitcher = ({color,setColor}) => {

   
    const handleChange = (e) => {
         localStorage.setItem('color',color)
        setColor(e.target.value)
    }
    
  return (
      <StyledColorTheme>
          <input type="color" value={color}  onChange={handleChange}/>
      </StyledColorTheme>
  )
}

const StyledColorTheme = styled.div`
 position: absolute;
 right: 20px;
 top: 20px;

`

export default ColorSwitcher