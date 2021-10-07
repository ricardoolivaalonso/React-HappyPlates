import styled,{ css } from "styled-components"
import { MainButtonElement } from '../04-elements/MainButtonElement'

const Trending = styled.section`
    width: 100%;
    overflow: hidden;
    margin-bottom: 144px;

    @media ${({theme}) => theme.queries.mobile} { 
        margin-bottom: 56px;
	}
`
    const TrendingScroll = styled.div`
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-areas: 
        "big small-top"
        "big small-bottom"
        ;
        grid-gap: var(--gap);
        width: 100%;
        
        @media ${({theme}) => theme.queries.mobile} { 
            grid-template-columns: 256px 256px 256px;
            grid-template-areas: "big small-top small-bottom";
            overflow-x: scroll;
        }

        ${ ({items}) => items && css`
            grid-template-areas: "small-top small-bottom";
        
            @media ${({theme}) => theme.queries.mobile} { 
                grid-template-columns: 100% ;
                grid-template-areas: "small-top" "small-bottom";
                overflow-x: hidden;
            }
        `}

    `
        const TrendingItem = styled.article`
            grid-area: ${ ({area}) => area };
            position: relative;
            width: 100%;
            height: 100%;

            cursor: pointer;
            overflow: hidden;
            border-radius: 4px;

            &::before {
                content: '';
                display: block;
                padding-top: calc(100%/1.33);

                @media ${({theme}) => theme.queries.mobile} { 
                    padding-top: calc(100%/.67);
                }
            }

            ${ ({items}) => items && css`
                &::before { padding-top: calc(100%/.67); }
            `}
        `
            const TrendingPicture = styled.img`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;  
            `

const TrendingSection = ({items, trending}) => {
    return(
        <Trending>
            <TrendingScroll items={items}>
                {
                    trending.map( t =>
                        <TrendingItem area={t.area} items={items} key={t.id}>
                            <TrendingPicture src={t.img} />
                            <MainButtonElement>{t.title}</MainButtonElement>
                        </TrendingItem>
                    )
                }
            </TrendingScroll>
        </Trending>
    )
}

export { TrendingSection }