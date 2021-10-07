import { ThemeProvider } from "styled-components";
import { Variables } from "./Variables";
import { Fonts } from "./Fonts";
import { Reset } from "./Reset";
import { Base } from "./Base";

import { theme } from './theme';

const Styles = ({children}) => {
    return(
        <ThemeProvider theme={theme}>
            <Variables />
            <Fonts />
            <Reset />
			<Base />
            {children}
        </ThemeProvider>
    )
}

export { Styles }