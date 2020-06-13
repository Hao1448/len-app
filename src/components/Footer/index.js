import React from 'react';
import styled from 'styled-components'
import { p_large } from '../../base/mixins/text'


const Footer = () => {
    return (
        <Wrapper>
            <Text href={`tel:+79999999999`}>
                +7 (999) 999 99 99
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.div` 
    background: ${p => p.theme.color.grey};
    padding: 12px; 
    text-align: center;
`
const Text = styled.a`
    ${p_large};
    opacity: .4;
    color: ${p => p.theme.color.black};
    border-bottom: 1px solid ${p => p.theme.color.black};
    text-decoration: none;
    cursor: pointer;
`

export default Footer