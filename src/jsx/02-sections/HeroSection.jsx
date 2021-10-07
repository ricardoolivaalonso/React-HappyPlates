import styled from "styled-components"
import { MainSubtitleElement } from "../04-elements/MainSubtitleElement"
import { MainTitleElement } from "../04-elements/MainTitleElement"

const Hero = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: auto;
    margin: 64px 0 120px;
    
    @media ${({theme}) => theme.queries.mobile} { 
        margin: 48px 0 56px;
	}
`

const HeroSection = () => {
    return(
        <Hero>
            <MainTitleElement>Rezepte finden und Zutaten online bestellen</MainTitleElement>
            <MainSubtitleElement>So funktioniert’s</MainSubtitleElement>
        </Hero>
    )
}

export { HeroSection }