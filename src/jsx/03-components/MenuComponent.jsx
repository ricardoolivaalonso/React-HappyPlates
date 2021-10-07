import styled, { css } from "styled-components";
import { MainLinkElement } from "../04-elements/MainLinkElement";

const Menu = styled.nav`
    @media ${({theme}) => theme.queries.mobile} { 
        display: none;
	}

    ${({footer}) => footer && css`
        @media ${({theme}) => theme.queries.mobile} { 
            display: inherit;
        }
    `}
`
    const MenuList = styled.ul`
        display: grid;
        grid-auto-columns: min-content;
        grid-auto-flow: column;
        justify-content: start;
        grid-column-gap: var(--gap);
        list-style: none;

        ${({footer}) => footer && css`
            grid-column-gap: calc(var(--gap) * 2);
        `}
    `
        const MenuItem = styled.li`
            ${({footer}) => footer && css`
                grid-column-gap: calc(var(--gap) * 2);
                line-height: 5;
            `}
        `


const MenuComponent = ({menu, footer}) => {
  
    return(
        <Menu>
            <MenuList>
                {   
                    menu.map( m =>
                        <MenuItem footer={footer} key={m.id}>
                            <MainLinkElement href="#placeholder" active={m.active} footer={footer}>{m.title}</MainLinkElement>
                        </MenuItem>     
                    )
                } 
            </MenuList>
        </Menu>
    )
}

export { MenuComponent }

