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
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';


const NavLinks = styled(Link)`
  color: white;
//   background-image: linear-gradient(to left top, #ddabea, #d19de7, #c390e4, #b484e1, #a378df);
  background-color:#A378DF;
  transform: rotate(45deg);
  transition: all 0.3s ease-in-out;
  &.active {
    color:white;
    // background-image:transparent;
    background-color: transparent;
    transform: none;
   
   
    
  }
  
`;

const LightTooltip = styled(({
    className,
    ...props
}) => (
    <Tooltip {...props}
        classes={
            {popper: className}
        }/>
))(({theme}) => ({
    [`& .${
            tooltipClasses.tooltip
        }`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11
    }
}));

function Verticalnavbar() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box display="grid" position="fixed" top="50%" right="30px" zIndex="2" data-aos="fade-left"
            sx={
                {
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "block"
                    }
                }
        }>
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

                        <LightTooltip title="HOME" placement="left">
                            <Box className={
                                Styles.navbox
                            }></Box>
                        </LightTooltip>
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
                        <LightTooltip title="ABOUT" placement="left">
                            <Box className={
                                Styles.navbox
                            }></Box>
                        </LightTooltip>
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
                        <LightTooltip title="SKILLS" placement="left">
                            <Box className={
                                Styles.navbox
                            }></Box>
                        </LightTooltip>
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
                        <LightTooltip title="PROJECTS" placement="left">
                            <Box className={
                                Styles.navbox
                            }></Box>
                        </LightTooltip>
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
                        <LightTooltip title="CONTACT" placement="left">
                            <Box className={
                                Styles.navbox
                            }></Box>
                        </LightTooltip>
                    </NavLinks>
                </li>

            </ul>
        </Box>
    )
}

export default Verticalnavbar
