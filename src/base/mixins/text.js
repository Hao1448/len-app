import { css } from 'styled-components'


const h1 = ({ theme }) => css`
    font-weight: 600;
    font-size: 30px;
    line-height: 41px;
`

const h2 = ({ theme }) => css`
   font-weight: 600;
    font-size: 20px;
    line-height: 27px;
`

const h3 = ({ theme }) => css`
    font-weight: 600;
    font-size: 18px;
    line-height: 10px;
`

const p_large = ({ theme }) => css`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
`
const p = ({ theme }) => css`
    font-size: 16px;
    line-height: 24px;
`
const p_small = ({ theme }) => css`
   font-style: italic;
   font-size: 14.6692px;
   line-height: 22px;
`


export {
    h1,
    h2,
    h3,
    p,
    p_large,
    p_small
}