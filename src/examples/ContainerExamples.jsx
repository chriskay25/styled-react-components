import React from 'react'
import StyledContainer from '../styled-components/StyledContainer'

const ContainerExamples = () => {
    return (
        <div>
            <StyledContainer><h1>Containers</h1></StyledContainer>
            <StyledContainer>
                <div style={{ height: 300, backgroundColor: 'burlywood' }}>
                    <h1>Default</h1>
                </div>
            </StyledContainer>
            <StyledContainer fullVertical>
                <div style={{ height: 300, backgroundColor: 'coral' }}>
                    <h1>Full Vertical</h1>
                </div>
            </StyledContainer>
            <StyledContainer full small>
                <div style={{ height: 300, backgroundColor: 'khaki' }}>
                    <h1>Full Small</h1>
                </div>
            </StyledContainer>
        </div>
    )
}

export default ContainerExamples