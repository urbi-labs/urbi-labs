import styled from "styled-components"

export const Nav = styled.nav`
    border-bottom: solid 1px ${props => props.theme.colors.lightestGray};
    height: 75px;
`

export const SubMenuNav = styled.div`   
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: ${props => props.theme.colors.lightBlue};
    position: fixed;
    width: 100%;
    a {
        color: #fff;
        line-height: 50px;
    }
`

export const MenuItem = styled.a`
    padding: 9.5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.blue};
    &.contact-us {
        color: #fff;
    }
`;

export const MobileMenuIcon = styled.div`
    display: none;
    cursor: pointer;
    width: 75px;
    height: 75px;
    padding: 15px;
    background-color: ${props => props.theme.colors.blue};
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        display: block;
    }
`;