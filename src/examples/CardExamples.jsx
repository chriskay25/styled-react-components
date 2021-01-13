import React from 'react'
import StyledCard from '../styled-components/StyledCard'
import Flex from '../styled-components/Flex'
import StyledContainer from '../styled-components/StyledContainer'

const CardExamples = () => {
    return (
        <div>
            <StyledContainer>
                <h1>Cards</h1>
            </StyledContainer>
            <StyledContainer>
                <StyledCard>
                    <h1>Default Card</h1>
                </StyledCard>
                <StyledCard big>
                    <h1>Big Card</h1>
                Styled-components is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to prevent that and efficiently write components.
                </StyledCard>
            </StyledContainer>
            <StyledContainer>
                <StyledCard primary>
                    <h1>Card Primary</h1>
                Styled-comStyled-components is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to preveStyled-components is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to preveStyled-components is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to preveStyled-components is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to preveStyled-components is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to preveStyled-components is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to preveStyled-components is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to preveStyled-components is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to preveStyled-components is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to preveStyled-components is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to preveStyled-components is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to prevent that and efficiently write components.nt that and efficiently write components.nt that and efficiently write components.nt that and efficiently write components.nt that and efficiently write components.nt that and efficiently write components.nt that and efficiently write components.nt that and efficiently write components.nt that and efficiently write components.nt that and efficiently write components.nt that and efficiently write components.ponents is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to prevent that and efficiently write components.
                </StyledCard>
            </StyledContainer>
            <StyledContainer>
                <StyledCard nomargin>
                    <h1>No Margin</h1>
                    Styled-components is a kind of CSS in JS solution, meaning that you do not have external CSS files to fiddle with. Everything is in one place — logic, styling, and markup. At first sight, this might seem confusing and if you don’t know how to handle it, your JS files will blow up in no time. This article is here to provide you a guide to prevent that and efficiently write components.
                </StyledCard>
            </StyledContainer>

            <Flex>
                <StyledCard>
                    <h3>Normal Card</h3>
                        <p>
                            Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi
                            porta gravida at eget metus. Donec sed odio dui.
                        </p>
                </StyledCard>
                <StyledCard big>
                    <h3>Big Card</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
                            odio dui. Donec id elit non mi porta gravida at eget metus.
                        </p>
                </StyledCard>
                <StyledCard delay={2500}>
                    <h3 style={{ backgroundColor: '#000', color: '#fff' }}>
                        Primary Delayed Card
                    </h3>
                        <p>
                            Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi
                            porta gravida at eget metus. Donec sed odio dui.
                        </p>
                </StyledCard>
            </Flex>
        </div>
    )
}

export default CardExamples