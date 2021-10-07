import styled, {css} from "styled-components"
import  FooterIcon1 from '../../img/happy-plates-partner-billa.png'
import  FooterIcon2 from '../../img/happy-plates-partner-gurkerl.png'



const Footer = styled.footer`
    margin-bottom: 54px;
`
const FooterList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: var(--gap);
    grid-template-areas: "big one two three for";
    margin-top: calc(var(--font-root)*2);

    @media ${({theme}) => theme.queries.mobile} { 
        grid-template-columns: 1fr 1fr;
        grid-column-gap: calc(var(--gap)*1);
        grid-row-gap: calc(var(--font-root)*4);
        grid-template-areas: 
            "big big"
            "one two"
            "three ."
        ;
        margin-top: 54px;
	}
`
const FooterItem = styled.article`
        display: grid;
        grid-auto-flow: row;
        grid-gap: calc(var(--font-root)*.725);
        align-content: start;
        width: 100%;
        max-width: 250px;

        
        ${({big})=> big && css`
            grid-area: big;

            @media ${({theme}) => theme.queries.mobile} { 
                max-width: 100%;
            }
        `}

    `
    const FooterCategorie = styled.span`
        font-family: 'BananaSemibold';
        font-weight: 500;
        font-size: calc(var(--font-root)*1.125);
    `
    const FooterLink = styled.a`
        font-size: var(--font-root);

        ${({big})=> big && css`
            max-width: 320px;
            line-height: 1.6;

            @media ${({theme}) => theme.queries.mobile} { 
                max-width: 400px;
            }
        `}
    `
    const FooterButton = styled.button`
        width: min-content;
        padding: 6px 12px;

        background-color: var(--black);
        border-radius: 8px;
        color: var(--white);
        cursor: pointer;

        &:hover{
            background-color: var(--shadow);
        }
    `
    const FooterIcons = styled.div`
        display: flex;
        grid-gap: var(--font-root);
    `
    const FooterIcon = styled.img`
        max-width: 80px;
        width: 100%;
    `

const FooterSection = () => {
    return(
        <Footer>
            <FooterList>
                <FooterItem big>
                    <FooterCategorie>Neues aus der Community</FooterCategorie>
                    <FooterLink big>Abonniere unseren Newsletter, um die neuesten Rezepte aus den Küchen unserer Community-Mitglieder zu erhalten!</FooterLink>
                    <FooterButton>Anmelden</FooterButton>
                </FooterItem>
                <FooterItem>
                    <FooterCategorie>Hilfe & Kontakt</FooterCategorie>
                    <FooterLink>Partner werden</FooterLink>
                    <FooterLink>FAQ</FooterLink>
                    <FooterLink>Kontakt</FooterLink>                 
                </FooterItem>
                <FooterItem>
                    <FooterCategorie>Unternehmen</FooterCategorie>
                    <FooterLink>Über uns</FooterLink>
                    <FooterLink>Presse</FooterLink>
                    <FooterLink>Datenschutzerklärung</FooterLink>
                    <FooterLink>AGB</FooterLink>
                    <FooterLink>Impressum</FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterCategorie>Unsere Lieferpartner</FooterCategorie>
                    <FooterIcons>
                        <FooterIcon src={FooterIcon1}></FooterIcon>
                        <FooterIcon src={FooterIcon2}></FooterIcon>
                    </FooterIcons>               
                </FooterItem>
            </FooterList>
        </Footer>
    )
}

export { FooterSection }