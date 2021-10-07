import styled from "styled-components"

const CardLinkElement = styled.a`
    font-size: calc(var(--font-root)*.875);

    @media ${({theme}) => theme.queries.mobile} { 
        display: none;
    }
  
`
export { CardLinkElement }