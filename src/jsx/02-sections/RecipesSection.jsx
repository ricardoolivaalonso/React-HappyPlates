import styled from "styled-components"
import { RecipeCardComponent } from "../03-components/RecipeCardComponent"
import { CardLinkElement } from "../04-elements/CardLinkElement"
import { CardTitleElement } from "../04-elements/CardTitleElement"

const Recipes = styled.section`
    width: 100%;
    margin-bottom: 144px;

    @media ${({theme}) => theme.queries.mobile} { 
        margin-bottom: 56px;
	}

`
    const RecipeHeader = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: calc(var(--font-root)*2);
    `
        const RecipeList = styled.div`
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: auto;
            grid-gap: var(--gap);

            @media ${({theme}) => theme.queries.mobile} { 
                grid-template-columns: repeat(2, 1fr);
            }
        `

const RecipesSection = ({recipesList}) => {
    return(
        <Recipes >
            <RecipeHeader>
                <CardTitleElement>{recipesList[0].title}</CardTitleElement>
                <CardLinkElement>Mehr zeigen</CardLinkElement>
            </RecipeHeader>
            <RecipeList >
                {
                    recipesList[0].recipes.map( r => 
                        <RecipeCardComponent 
                            key = { r.id } 
                            id = { r.id } 
                            title = { r.title } 
                            author = { r.author }
                            cat = { r.cat } 
                            img = { r.img } 
                            avatar = { r.avatar } 
                        />
                    )
                }
            </RecipeList>
        </Recipes>
    )   
}

export { RecipesSection }