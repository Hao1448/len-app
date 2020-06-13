import React from 'react';
import styled, { ThemeProvider} from 'styled-components'
import { GlobalTheme } from './base/theme'
import { GlobalStyle } from './base/styles'
import { Header, WidgetHero, WidgetReview, WidgetSchedule, Footer } from './components'

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyle/>
      <Wrapper>
        <Row>
          <Header/>
        </Row>
        <Row>
          <WidgetHero/>
        </Row>
        <Row>
          <WidgetReview/>
        </Row>
        <Row>
          <WidgetSchedule/>
        </Row>
        <Row>
          <Footer/>
        </Row>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div` 
  padding-top: 20px;
`
const Row = styled.div`
  & + & {
    margin-top: 40px;
  }
`
export default App;
