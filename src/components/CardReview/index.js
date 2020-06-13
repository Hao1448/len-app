import React from 'react'
import styled from 'styled-components'
import { p_small, h3 } from '../../base/mixins/text'
import { Grid } from '../../components'
import image from '../../base/images/img_user.jpeg'

const CardReview = () => {
        return (
            <Wrapper>
               <Grid>
                    <Column className="img">
                        <Image src={image}/>
                    </Column>
                   <Column className="content">
                        <Title>Roger Stevenson</Title>
                        <Line/>
                        <Text>American skeptic producer and author Brian Dunning believes Polybius to be an urban legend that grew out of exaggerated and distorted tales of an early release version of Tempest that caused problems with photosensitive epilepsy, motion sickness, and vertigo.</Text>
                   </Column>
               </Grid>
            </Wrapper>
        )
    }


const Column = styled.div`
    &.img {
        grid-column: span 3;
        text-align: center;
    }
    &.content {
        grid-column: span 9;
    }
  
`

const Title = styled.div`
    ${h3};
`

const Text = styled.div`
    ${p_small};
`
const Image = styled.img`
    border-radius: 50%;
    max-width: 80px;
    max-height: 80px;
`

const Line = styled.div`
    width: 35px;
    height: 3px;
    background: ${p =>p.theme.color.red};
    margin: 10px 0 20px;
    transition: width 0.2s;
`

const Wrapper = styled.div`
    padding: 40px 10px;
    border: 3px solid ${p => p.theme.color.grey};
    transition: border-color 0.2s;
    cursor: pointer;
    &:hover {
        border: 3px solid ${p => p.theme.color.red};
        ${Line} {
            width: 70px;
        }
        ${Title} {
            color: ${p =>p.theme.color.red};
        }
        ${Text} {
            color: ${p =>p.theme.color.red};
        }
    }
`
export default CardReview
