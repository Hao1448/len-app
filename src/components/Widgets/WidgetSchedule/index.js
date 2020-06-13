import React from 'react';
import styled from 'styled-components'
import { Grid } from '../../../components'
import { h2, p_large } from '../../../base/mixins/text'


const WidgetSchedule = () => {
    return (
        <Wrapper>
            <Content>
                <Title>Часы работы</Title>
                <Grid gap="0"> 
                    <Col>
                        <ScheduleItem className="grey">
                            <Text>пн-пт</Text>                       
                        </ScheduleItem>
                        <ScheduleItem>
                            <Text>cб</Text>              
                        </ScheduleItem>
                        <ScheduleItem className="grey">
                            <Text>вс</Text>                 
                        </ScheduleItem>
                    </Col>
                    <Col>
                        <ScheduleItem className="grey">                
                            <Text>10-18</Text>
                        </ScheduleItem>
                        <ScheduleItem>
                            <Text>10-16</Text>
                        </ScheduleItem>
                        <ScheduleItem className="grey">
                            <Text>12-16</Text>
                        </ScheduleItem>
                    </Col>
                </Grid>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
const Col = styled.div`
    grid-column: span 6;
`
const Content = styled.div`
    min-width: 242px;
`

const Title = styled.div`
    ${h2};
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 40px;
`
const ScheduleItem = styled.div`
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    padding: 5px 35px 13px;
    &.grey {
        background: ${p => p.theme.color.grey_light}
    }
`
const Text = styled.div`
    ${p_large};

`
export default WidgetSchedule