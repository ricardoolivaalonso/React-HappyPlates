import styled from "styled-components"
import { CartIconElement } from "../04-elements/CartIconElement"
import { ListIconElement } from "../04-elements/ListIconElement"
import { MainSvgElement } from "../04-elements/MainSvgElement"

const Form = styled.form`
    display: grid;
    grid-auto-columns: min-content;
    grid-auto-flow: column;
    justify-content: end;
    align-items: center;
    grid-column-gap: var(--gap);
    width: 100%;

    @media ${({theme}) => theme.queries.mobile} { 
        display: none;
	}

`
const FormWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
`
    const FormInput = styled.input.attrs({ type: 'text', placeholder: 'Suche' })`
        width: 100%;
        width: 215px;
        height: 40px;

        padding-right: calc(var(--gap) / 2);
        padding-left: calc(var(--gap) * 2.5);

        font-size: var(--font-root);
    `
    const FormLink = styled.a`
        cursor: pointer;
    `
    const FormInputSVG = styled(MainSvgElement)`
        position: absolute;
        left: calc(var(--gap) / 2);
    `
const FormComponent = () => {
    return(
        <Form>
            <FormWrapper>
                <FormInput />
                <FormInputSVG>
                    <path
                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M20.9984 21L16.6484 16.65"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </FormInputSVG>
            </FormWrapper>

            <FormLink>
                <ListIconElement />
            </FormLink>

            <FormLink>
                <CartIconElement />
            </FormLink>
        </Form>
    )
}

export { FormComponent }