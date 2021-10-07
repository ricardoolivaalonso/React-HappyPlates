import styled from "styled-components";


const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;

	color: ${props => props.theme.colors.main};
	border: 2px solid ${props => props.theme.colors.lime};

	@media ${props => props.theme.queries.phone} { 
		color: yellow;
		width: 400px;
	}

`

export { Button }