import {
    Grid,
    Box,
    Typography,
    Container,
    Divider,
    Paper,
    Stack
} from '@mui/material'
import React from 'react'
import Styles from '../src/styles/Nav.module.css'
import {ColorModeContext} from '../public/theme'
import {styled, useTheme, alpha} from '@mui/material/styles';
import {Link} from 'react-scroll'


const NavLinks = styled(Link)`
  color: #D18DE0;
  background-color: #D18DE0;
  transform: rotate(45deg);
  transition: all 0.3s ease-in-out;
  &.active {
    color:#D18DE0;
    background-color: transparent;
    transform: none;
   
    
  }
  
`;

function Verticalnavbar() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box display="grid" position="fixed" top="50%" right="30px">
            <ul className={
                Styles.verticalmenu
            }>
                <li>
                    <NavLinks to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className={
                            Styles.navlink
                    }>
                        <Box className={
                            Styles.navbox
                        }></Box>
                    </NavLinks>
                </li>

                <li>
                    <NavLinks to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className={
                            Styles.navlink
                    }>
                        <Box className={
                            Styles.navbox
                        }></Box>
                    </NavLinks>
                </li>

                <li>
                    <NavLinks to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className={
                            Styles.navlink
                    }>
                        <Box className={
                            Styles.navbox
                        }></Box>
                    </NavLinks>
                </li>

                <li>
                    <NavLinks to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className={
                            Styles.navlink
                    }>
                        <Box className={
                            Styles.navbox
                        }></Box>
                    </NavLinks>
                </li>

                <li>
                    <NavLinks to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className={
                            Styles.navlink
                    }>
                        <Box className={
                            Styles.navbox
                        }></Box>
                    </NavLinks>
                </li>

            </ul>
        </Box>
    )
}

export default Verticalnavbar
