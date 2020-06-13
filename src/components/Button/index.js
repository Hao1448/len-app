import React  from 'react';
import styled from 'styled-components'

const UiButton = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
    padding: 7px 0 11px;
    cursor: pointer;
    border-radius: 20px;
    background: ${p =>p.theme.color.red};
    color: ${p =>p.theme.color.white};
    transition: background 0.2s, color 0.2s, border-color 0.2s, font-weight 0.2s;
    outline: none;
    user-select: none;
    &:hover {
        background: ${p => p.theme.color.primary_dark};
        border-color: ${p => p.theme.color.primary_dark};
    }
`
export default UiButton
