import React from 'react'
import StyledButton from '../styled-components/StyledButton'
import StyledContainer from '../styled-components/StyledContainer'

const ButtonExamples = () => {
    return (
        <div>
            <StyledContainer>
                <h1>Buttons</h1>
            </StyledContainer>
            <StyledContainer>
                <StyledButton>Primary StyledButton</StyledButton>
                <StyledButton secondary>Secondary StyledButton</StyledButton>
                <StyledButton inverse>Inverse StyledButton</StyledButton>
                <StyledButton big>Big Primary StyledButton</StyledButton>
                <StyledButton big secondary>Big Secondary StyledButton</StyledButton>
                <StyledButton loading>Primary Loading StyledButton</StyledButton>
            </StyledContainer>
        </div>
    )
}

export default ButtonExamples