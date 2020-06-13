import React from 'react';
import styled from 'styled-components'
import { Container, UiButton } from '../../../components'
import { h1, p  } from '../../../base/mixins/text'


const WidgetHero = () => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Title>О компании</Title>
                    <Line/>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br/> tempor incididunt ut labore et <b>dolore magna aliqua.</b></Text>
                    <Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br/> aliquip ex ea commodo consequat.</Text>
                    <Text className="red">Lorem ipsum dolor sit amet, consectetur adipisicing elit!</Text>
                    <UiButton>Купить продукт</UiButton>
                </Content>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: 30px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
    ${h1};
    text-transform: uppercase;
`
const Line = styled.div`
    width: 72px;
    height: 5px;
    background: ${p =>p.theme.color.red};
    margin: 14px 0 33px;
`

const Text = styled.div`
    ${p};
    & + & {
        margin-top: 10px;
    }
    text-align: center;
    &.red {
        font-weight: 600;
        margin: 15px 0 30px;
        color: ${p =>p.theme.color.red};
        text-transform: uppercase;

    }
`
export default WidgetHero