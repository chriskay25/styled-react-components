import React from 'react'
import styled from 'styled-components'
import StyledContainer from '../styled-components/StyledContainer'
import Flex, { Column } from '../styled-components/Flex'

const FlexExamples = () => {
    return (
        <div>
            <StyledContainer><h1>Flex Examples</h1></StyledContainer>
            <StyledContainer style={{backgroundColor: ''}}>
                <StyledContainer small full style={{backgroundColor: '#fff'}}>
                    <Flex justifyAround>
                        <div style={{height: 100, width: 100, borderRadius: 50, backgroundColor: '#F9D773'}} />
                        <div style={{height: 100, width: 100, borderRadius: 50, backgroundColor: '#F9D773'}} />
                        <div style={{height: 100, width: 100, borderRadius: 50, backgroundColor: '#F9D773'}} />
                    </Flex>
                </StyledContainer>
            </StyledContainer>

            <StyledContainer>
                <Flex nowrap>
                    <Column three style={{ height: 300, backgroundColor: '#5CB5FA' }} />
                    <Column three style={{ height: 300, backgroundColor: '#B9DFFD' }} />
                    <Column three style={{ height: 300, backgroundColor: '#5CB5FA' }} />
                </Flex>
            </StyledContainer>

            <StyledContainer style={{ background: '#73CE32' }}>
                <StyledContainer small full style={{ backgroundColor: '#fff' }}>
                    <Flex noWrap justifyAround>
                        <Column four style={{ height: 150, backgroundColor: '#D5FDA8' }} />
                        <Column four style={{ height: 150, backgroundColor: '#D5FDA8' }} />
                        <Column four style={{ height: 150, backgroundColor: '#D5FDA8' }} />
                    </Flex>
                </StyledContainer>
            </StyledContainer>
        </div>
    )
}

export default FlexExamples