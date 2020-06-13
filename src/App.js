import React from 'react';
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { GlobalTheme } from './base/theme'
import { Header } from './components'

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Wrapper>
        <Header/>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div` 
  padding-top: 20px;
`

export default App;
