import styled from "styled-components";
import GridItem from "../GridItem";

export const PostContainer = styled(GridItem)` 
    padding-top: 100px;
    padding-bottom: 100px;
    cursor: pointer;

    >.singlePost__main{
        &:hover{    
            >.singlePost__text{
                >.singlePost__date{
                    color: #fff;
                }
                &:after {
                    transition: clip-path 0.3s ease;
                    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
                }
            }    
        }
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px) {
        padding-bottom: 0px;
        margin-top: 0 !important;

		&:first-child{
            padding-top: 0;
        }

        &:last-child{
            padding-bottom: 100px;
        }
	}

`

export const SinglePostImage = styled.div` 
    position: relative;
    height: 400px;
    margin-left: 25px;
    z-index: 11;
`

export const SinglePostTitle = styled.div` 
    border: 1px solid ${props => props.theme.colors.blue};
    margin-top: -300px;
    padding-top: 300px;
    padding-left: 35px;
    margin-right: 25px;
    z-index: 10;
    position: relative;
	transition: max-width 0.3s ease, color 0.3s ease;

    &:after {
        content: '';
        background-color: ${props => props.theme.colors.blue};
        clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
        position: absolute;
        inset: -1px;
        z-index: -1;
        transition: clip-path 0.3s ease;
    }

    >.singlePost__date{
        color: ${props => props.theme.colors.blue};
        font-weight: 300;
        font-size: 12px;
        margin-top: 32px;
        margin-bottom: 5px;
    }

    >.singlePost__title{
        color: ${props => props.theme.colors.darkestGray};
        font-weight: 600;
        font-size: 28px;
        margin: 0px;
        margin-bottom: 32px;

        @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px) {
            font-size: 20px;
        }
    }
`