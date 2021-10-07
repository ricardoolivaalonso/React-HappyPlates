import styled from "styled-components"
import { CardCategorieElement } from "../04-elements/CardCategorieElement"

const CardItem = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`
const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: var(--font-root);

    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;

    &::before{
        content: '';
        display: block;
        padding-top: calc(100%/.67);
    }
`
    const CardPicture = styled.img`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    `
const CardFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: auto;
`
    const CardLink = styled.a`
        grid-area: link;
        width: 100%;

        font-size: calc(var(--font-root) * 1.125);
        text-transform: capitalize;

        @media ${({theme}) => theme.queries.mobile} { 
            font-size: var(--font-root);
        }
    `

const CreatorCardComponent = ({id, title, cat, img}) => {
    return(
        <CardItem>
            <CardHeader>
                <CardPicture src={img} />
            </CardHeader>
            <CardFooter>
                <CardLink>{title}</CardLink>
                <CardCategorieElement>{cat}</CardCategorieElement>
            </CardFooter>
        </CardItem>
    )
}

export { CreatorCardComponent }