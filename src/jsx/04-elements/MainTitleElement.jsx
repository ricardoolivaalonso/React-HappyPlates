import styled from "styled-components"

const MainTitleElement = styled.h1`
    max-width: 800px;
    margin-bottom: calc(var(--font-root) * 2);

    font-family: 'BananaLight';
    font-size: calc(var(--font-root)*3.5);
    font-weight: 400;
    text-align: center;

    @media ${({theme}) => theme.queries.mobile} { 
        font-size: calc( var(--font-root)*1.875 );
        margin-bottom: calc(var(--font-root) * 1.5);
	}

`

export { MainTitleElement }