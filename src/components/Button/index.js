import React  from 'react';
import styled from 'styled-components'
import { p_large  } from '../../base/mixins/text'

const UiButton = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.button`
    ${p_large};
    padding: 8px 21px 12px;
    cursor: pointer;
    border-radius: 5px;
    background: ${p =>p.theme.color.red};
    color: ${p =>p.theme.color.white};
    transition: box-shadow 0.2s;
    border: 0px;
    outline: none;
    user-select: none;
    &:hover {
        box-shadow: 0px 2px 0px ${p =>p.theme.color.black};;
    }
`
export default UiButton
