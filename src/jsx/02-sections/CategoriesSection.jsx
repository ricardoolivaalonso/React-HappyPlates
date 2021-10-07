import styled from "styled-components"
import { MenuComponent } from "../03-components/MenuComponent"
import { CardTitleElement } from "../04-elements/CardTitleElement"

const Categories = styled.section`
    width: 100%;
    margin-bottom: 144px;

    @media ${({theme}) => theme.queries.mobile} { 
        margin-bottom: 56px;
	}
`
const CategoriessHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: calc(var(--font-root)*2);
`
    const CategoriesList = styled.div`
        display: grid;
        grid-auto-flow: column;
        align-items: start;
        grid-gap: var(--gap);
        margin-top: calc(var(--font-root)*2);

        @media ${({theme}) => theme.queries.mobile} { 
            grid-auto-flow: row;
            grid-gap: calc(var(--gap)*2);
        }
    `
        const CategoriesItem = styled.article`
            display: grid;
            grid-auto-flow: row;
            grid-gap: var(--gap);
        `
        const CategoriesLink = styled.a`
            font-size: var(--font-root);
        `

const CategoriesSection = ({menu, links}) => {
    return(
        <Categories>
            <CategoriessHeader>
                <CardTitleElement>Kategorien</CardTitleElement>
            </CategoriessHeader>
            
            <MenuComponent menu={menu} footer />

            <CategoriesList>
                {
                    links.map( link => 
                        <CategoriesItem>
                            { link.map( l => <CategoriesLink>{l}</CategoriesLink>) }
                        </CategoriesItem>    
                    )
                }
            </CategoriesList>
        </Categories>
    )
}

export { CategoriesSection }