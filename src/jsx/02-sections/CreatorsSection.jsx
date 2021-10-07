import { data } from "../00-data/data";
import styled from "styled-components"
import { CreatorCardComponent } from "../03-components/CreatorCardComponent"
import { CardTitleElement } from "../04-elements/CardTitleElement"

const Creators = styled.section`
    width: 100%;
    margin-bottom: 144px;

    @media ${({theme}) => theme.queries.mobile} { 
        margin-bottom: 56px;
	}
`
const CreatorsHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: calc(var(--font-root)*2);
`
    const CreatorsList = styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: auto;
        grid-gap: var(--gap);

        @media ${({theme}) => theme.queries.mobile} { 
            grid-template-columns: repeat(2, 1fr);
        }

    `

const CreatorsSection = () => {
    return(
        <Creators>
            <CreatorsHeader>
                <CardTitleElement>Beliebte Creators</CardTitleElement>
            </CreatorsHeader>
            <CreatorsList>
                {
                    data.creators.map( c =>
                        <CreatorCardComponent 
                            key = { c.id }
                            id = { c.id }
                            title = { c.title }
                            cat = { c.cat }
                            img = { c.img }
                        />
                    )
                }
            </CreatorsList>
        </Creators>
    )
}

export { CreatorsSection }