import styled from 'styled-components';

export const ContactUsTitle = styled.h2`
    color: ${props => props.theme.colors.darkestGray};
    text-align: left;
`


export const CustomInput = styled.input` 
    width: 100%;
    height: 35px;
    font-family: 'Sora', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    border: 0;
    border-bottom: 1px solid ${props => props.theme.colors.darkestGray};
    color: ${props => props.theme.colors.darkestGray};
    margin: 30px 0;

    &::placeholder{
        color: #ACB4B9;
        font-weight: 300;
    }

    &:focus{
        outline: none;
        border-color: ${props => props.theme.colors.blue};        
    }
    
`

export const CustomTextArea = styled.textarea` 
    width: 100%;
    height: 100px;
    font-family: 'Sora', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    border: 0;
    border-bottom: 1px solid ${props => props.theme.colors.darkestGray};
    color: #3A4145;
    margin: 30px 0;

    &::placeholder{
        color: #ACB4B9;
        font-weight: 300;
    }

    &:focus{
        outline: none;
        border-color: ${props => props.theme.colors.blue};        
    }
    
`

export const HalfWidthArea = styled.div` 
    display: flex;
    
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        display: block;
    }
    & div {
     
        flex: 50%;
        &:first-child{
            padding-right: 30px;
            @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
                padding-right: 0;
            }

        }

        @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
            width: 100%;
            flex: 1;
        }
    }
`