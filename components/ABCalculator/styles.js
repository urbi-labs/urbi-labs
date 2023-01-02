import styled from "styled-components"
import GridContainer from "../GridContainer"
import GridItem from "../GridItem"

export const MainContainer = styled(GridContainer)` 
    padding-top: 125px; 
    padding-bottom: 125px; 
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        padding-top: 90px; 
        padding-bottom: 90px; 
    }
`

export const CalculatorItem = styled(GridItem)` 
    border: 1px solid ${props => props.theme.colors.blue};
    height: fit-content;
`

export const ResultItem = styled(GridItem)` 
    padding: 0 20px;
    border: 1px solid ${props => props.theme.colors.blue};
    height: fit-content;
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        margin-top: 20px;
    }
`

export const CalculatorRow = styled.div` 
    display: flex;
    flex-direction: row;
    padding: 15px 0px;
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    color: ${props => props.theme.colors.darkestGray};
    &.conversionWinner{
        background-color: ${props => props.theme.colors.blue};
        color: white;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        font-size: 16px;
    }

    >.letter{
        width: 7%;
        text-align: center;
        @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
            width: 10%;
        }
    }
    >.values{
        width: 34%;
        text-align: center;
        @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
            width: 30%;
        }
    }
    >.conversion-rate{
        width: 25%;
        text-align: center;
        @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
            width: 30%;
        }
    }

`

export const ValueInput = styled.input` 
    font-size: 18px;
    font-family: "Sora", sans-serif;
    line-height: 24px;
    text-align: right;
    font-weight: 300;
    color: ${props => props.theme.colors.darkestGray};
    width:90%;
    border: 0px;
    border-bottom: 1px solid ${props => props.theme.colors.blue};

    &.conversionWinner{
        background-color: ${props => props.theme.colors.blue};
        color: white;
        border-bottom: 1px solid white;
    }

    &:focus{
        outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type=number] {
        -moz-appearance: textfield;
    }
`

export const ResultTitle = styled.p` 
    font-weight: 300;
    color: ${props => props.theme.colors.darkestGray};
    font-size: 20px;
    margin: 15px 0;
`

export const ResultText = styled.p` 
    font-weight: 300;
    color: ${props => props.theme.colors.darkestGray};
    font-size: 15px;
`