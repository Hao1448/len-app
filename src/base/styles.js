import { createGlobalStyle } from 'styled-components'
import { GlobalFonts } from './fonts.js'

export const GlobalStyle = createGlobalStyle`
	${GlobalFonts}
	
	body {	
		font-family: 'Open Sans', sans-serif;
		margin: 0;
	}

`