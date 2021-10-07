import styled from "styled-components"

const MainSubtitleElement = styled.p`
    font-size: calc(var(--font-root)*1.5);
    line-height: 1.167;
    border-bottom: 1px solid var(--black);

    @media ${({theme}) => theme.queries.mobile} { 
        font-size: calc( var(--font-root) * 1.1275 );
	}
   
`
export { MainSubtitleElement }
