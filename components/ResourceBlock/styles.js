import styled from "styled-components";


export const ResourceBox = styled.div` 
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.blue};
    padding: 32px 24px;
    /* min-height: 184px; */
`

export const ResourceTitle = styled.h4` 
    font-size: 28px;
    line-height: 32px;
    margin: 0;
    color: ${props => props.theme.colors.darkestGray};
    font-weight: 600;
`

export const ResourceDescription = styled.p` 
    color: ${props => props.theme.colors.darkestGray};
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    margin-bottom: 0;
`