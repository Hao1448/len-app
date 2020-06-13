import React  from 'react';
import styled from 'styled-components'
import { p_large } from '../../base/mixins/text'
import { Container, Grid } from '../../components'
import logo from '../../images/img_logo.png'

const Header = () => { 
    return (
        <Wrapper>
            <Row>
                <Container>
                    <Logo src={logo}/>
                </Container>
            </Row>
            <Row className="nav">
                <Container>
                    <Grid gap="0">
                        <HeaderItem>О компании</HeaderItem>
                        <HeaderItem>Услуги</HeaderItem>
                        <HeaderItem>О продукте</HeaderItem>
                        <HeaderItem>Контакты</HeaderItem>
                    </Grid>
                </Container>
            </Row>
        </Wrapper>
    )
}


const Wrapper = styled.div``
const Row = styled.div`
     &.nav {
        background: ${p => p.theme.color.grey};
     }
     & + & {
         margin-top: 20px;
     }
`

const Logo = styled.img``

const HeaderItem = styled.div`
    ${p_large};
    grid-column: span 3;
    padding: 11px 0 19px;
    text-align: center;
    cursor: pointer;
    background: ${p => p.theme.color.grey};
    transition: color .2s, background .2s;
    &:hover, &:focus, &:active {
        background: ${p => p.theme.color.red};
        color: ${p => p.theme.color.white};
    }
`

export default Header