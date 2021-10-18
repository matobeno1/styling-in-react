import React, {useState} from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  border: 1px solid #ccc;
  padding: 1rem;
`

const StyledButton = styled.button`
  font: inherit;
  cursor: pointer;
  border: 1px solid blue;
  background: blue;
  color: white;
  padding: .5rem 2rem;
  
  :focus {
    outline: none  
  }
  :hover, :active {
    background-color: lightblue;
    color: blue;
  }
  color: ${(props) => props.isOpened ? "yellow" : "red"} 
`

export const StyledComponent = () => {
    const [isOpened, setIsOpened] = useState(false)
    return (
        <StyledDiv>
            <StyledButton
                tabIndex={0}
                isOpened = {isOpened}
                onClick={() => setIsOpened(val => !val)}
            >
                {isOpened ? "opened" : "closed"}
            </StyledButton>
        </StyledDiv>
    )
}
