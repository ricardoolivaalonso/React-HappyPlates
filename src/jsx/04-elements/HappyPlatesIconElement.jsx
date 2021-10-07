import styled from "styled-components"

const HappyPlatesIconElement = styled.div`
    max-width: 76px;
    width: 100%;

    @media ${({theme}) => theme.queries.mobile} { 
        max-width: 64px;
	}

`

export { HappyPlatesIconElement }