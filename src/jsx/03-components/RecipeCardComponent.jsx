import styled from "styled-components"
import { MainSvgElement } from "../04-elements/MainSvgElement"
import { CartAddIconElement } from "../04-elements/CartAddIconElement"
import { LikeIconElement } from "../04-elements/LikeIconElement"
import { ListIconElement } from "../04-elements/ListIconElement"
import { CardCategorieElement } from "../04-elements/CardCategorieElement"

const CardItem = styled.article`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
`
const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
    const CardPicture = styled.img`
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
    `
    const CardTitle = styled.a`
        margin: var(--font-root) 0;
        font-family: 'BananaSemibold';
        font-size: var(--font-root);

        @media ${({theme}) => theme.queries.mobile} { 
            font-size: calc(var(--font-root)*.875);
        }
    `
    const CardOverlay = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    
        opacity: 0;
        visibility: hidden;
        background-image: linear-gradient(to top, rgba(0,0,0,.1), rgba(0,0,0,.025), rgba(0,0,0,.1));

        @media ${({theme}) => theme.queries.mobile} { 
            opacity: 1;
            visibility: visible;
        }
    `
    const CardIcons = styled.div`
        position: relative;
        width: 100%;
        height: 100%;

        cursor: pointer;
        overflow: hidden;
        border-radius: 16px;

        &::before {
            content: '';
            display: block;
            padding-top: calc(100%/.67);
        }
        
        &:hover > ${CardOverlay} {
            opacity: 1;
            visibility: visible;
        }
        
    `
    const CardSvg = styled(MainSvgElement)`
        position: absolute;
        top: var(--font-root);

        ${MainSvgElement} {
            stroke: var(--white);
        }
    `
    const CardSvg1 = styled(CardSvg)`
        right: var(--font-root);
    `
    const CardSvg2 = styled(CardSvg)`
        left: var(--font-root);
    `
    const CardSvg3 = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        width: 40px;
        height: 40px;
        bottom: calc(var(--font-root) + 8px);
        right: calc(var(--font-root) + 8px);

        border-radius: 50%;
        background-color: var(--white);

        ${MainSvgElement} {
            margin-top: 9px;
            margin-left: 6px;
        }
    `

const CardFooter = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 32px 1fr;
    grid-template-rows: min-content min-content;
    grid-template-areas:  
        "avatar link"
        "avatar cat"
    ;
    grid-column-gap: calc(var(--gap)/2);
    margin-top: auto;

`
    const CardAvatar = styled.img`
        grid-area: avatar;
        width: 32px;
        height: 32px;

        border-radius: 8px;
        font-size: var(--font-root);

        @media ${({theme}) => theme.queries.mobile} { 
            font-size: calc(var(--font-root) * .875);
        }
    `
    const CardLink = styled.a`
        grid-area: link;

        width: 100%;
        font-size: calc(var(--font-root) * .875);
    `
    

const RecipeCardComponent = ({id, title, author, cat, img, avatar}) => {
    return(
        <CardItem>

            <CardHeader>
                <CardIcons>
                    <CardPicture src={img} />
                    <CardOverlay>
                        <CardSvg1>
                            <MainSvgElement>
                                <ListIconElement />
                            </MainSvgElement>
                        </CardSvg1>
                        <CardSvg2>
                            <MainSvgElement>
                                <LikeIconElement />
                            </MainSvgElement>
                        </CardSvg2>
                        <CardSvg3>
                            <MainSvgElement>
                                <CartAddIconElement />
                            </MainSvgElement>
                        </CardSvg3>
                    </CardOverlay>
                </CardIcons>

                <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardFooter>
                <CardAvatar src={avatar}/>
                <CardLink>{author}</CardLink>
                <CardCategorieElement>{cat}</CardCategorieElement>
            </CardFooter>

        </CardItem>
    )
}

export { RecipeCardComponent  }