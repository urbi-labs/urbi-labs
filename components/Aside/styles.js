import styled from "styled-components"
import GridContainer from "../GridContainer";
import { MobileMenuIcon, Nav } from "../Navbar/styles";

export const AsideContainer = styled.aside`
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    z-index: 999;
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        flex-direction: column;
    }
`;

export const ComplementArea = styled.div` 
    flex: 1;
    background: rgba(0, 0, 0, 0.7);

    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        height: 150px;        
        width: 100%;   
        flex: none;     
    }
`

export const MainContentArea = styled.div` 
    width: 520px;     
    background-color: #fff;
    
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        width: 100%;
        flex: 1;
    }
`

export const CloseNav = styled(Nav)`
    border-bottom: 0;
    height: auto;
`

export const CloseIcon = styled(MobileMenuIcon)` 
    background-color: #fff;
    margin: 20px 0;
    padding: 25px;
    border: 1px solid ${props => props.theme.colors.blue};
`

export const ContentContainer = styled.div` 
    display: flex;
    align-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    padding-top: 50px;
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        width: 100%;
        flex: 1;
        flex-direction: row;
        padding-top: 0;
    }
` 