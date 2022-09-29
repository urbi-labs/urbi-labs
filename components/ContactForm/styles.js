import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const CustomInput = styled.input` 
    font-family: 'Sora', sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    border: 0;
    border-bottom: 2px solid ${props => props.theme.colors.lightestGray};
    color: #ACB4B9;

    &:focus{
        outline: none;
        border-color: ${props => props.theme.colors.blue};        
    }
    
`