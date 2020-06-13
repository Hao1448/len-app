import React from 'react';
import styled from 'styled-components'
import { Container, Grid, CardReview } from '../../../components'
import { h2  } from '../../../base/mixins/text'


const WidgetReview = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Отзывы наших покупателей</Title>
                <Grid>
                    <Card>
                        <CardReview/>
                    </Card>
                    <Card>
                        <CardReview/>
                    </Card>
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Title = styled.div`
    ${h2};
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 40px;
`
const Card = styled.div`
    grid-column: span 6;
`
export default WidgetReview