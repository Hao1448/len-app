import React  from 'react';
import styled from 'styled-components'

const Container = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
    max-width: 1182px;
    margin: 0 auto;
    padding: 0 30px;
`

export default Container