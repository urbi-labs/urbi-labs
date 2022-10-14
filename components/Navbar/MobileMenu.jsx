import Link from 'next/link'
import { withTheme } from 'styled-components'
import { useAsideContext } from '../../services/AsideContext'
import GridContainer from '../GridContainer'
import GridItem from '../GridItem'

const MobileMenu = (props) => {

    const {closeMenu, showContactForm} = useAsideContext();

    // Funcion para el form de contacto mobile. Cierra el Menu y abre el Contact Form
	const handleContactFormClick = () => {
        closeMenu()
		showContactForm();
    }


    const itemStyle = {
        color: props.theme.colors.blue,
        fontSize: '30px',
        textAlign: 'center',
        paddingTop: '30px'
    }

  return (
    
    <GridContainer>

        <GridItem
            gridPosition={{
                tablet: {
                    columnStart: 1,
                    columnEnd: 12
                },
                mobile: {
                    columnStart: 1,
                    columnEnd: 12
                }
            }}
            style={itemStyle}
        >
            <Link href="/" passHref>
                 <a onClick={props.onClick}>Home</a>
            </Link>
        </GridItem>
        <GridItem
            gridPosition={{
                tablet: {
                    columnStart: 1,
                    columnEnd: 12
                },
                mobile: {
                    columnStart: 1,
                    columnEnd: 12
                }
            }}
            style={itemStyle}
        >
            <Link href="/projects" passHref>
                <a onClick={props.onClick}>Projects</a>
            </Link>             
        </GridItem>
        <GridItem
            gridPosition={{
                tablet: {
                    columnStart: 1,
                    columnEnd: 12
                },
                mobile: {
                    columnStart: 1,
                    columnEnd: 12
                }
            }}
            style={itemStyle}
            
        >
            <Link href="/services" passHref>
                <a onClick={props.onClick}>Services</a>
            </Link>
        </GridItem>
        <GridItem
            gridPosition={{
                tablet: {
                    columnStart: 1,
                    columnEnd: 12
                },
                mobile: {
                    columnStart: 1,
                    columnEnd: 12
                }
            }}
            style={itemStyle}
            
        >
            <Link href="/content/blog" passHref>
                <a onClick={props.onClick}>Blog</a>
            </Link>
        </GridItem>
        <GridItem
            gridPosition={{
                tablet: {
                    columnStart: 1,
                    columnEnd: 12
                },
                mobile: {
                    columnStart: 1,
                    columnEnd: 12
                }
            }}
            style={itemStyle}
            
        >
            <Link href="/content/resources" passHref>
                <a onClick={props.onClick}>Resources</a>
            </Link>
        </GridItem>
        <GridItem
            gridPosition={{
                tablet: {
                    columnStart: 1,
                    columnEnd: 12
                },
                mobile: {
                    columnStart: 1,
                    columnEnd: 12
                }
            }}
            style={itemStyle}
            
        >
            <Link href="">
                <a onClick={handleContactFormClick}>Contact Us</a>
            </Link>
        </GridItem>
    </GridContainer>
    
  )
}

export default withTheme(MobileMenu)