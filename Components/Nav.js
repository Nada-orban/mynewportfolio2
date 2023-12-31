import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Avatar, Container,Slide } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Styles from '../src/styles/Nav.module.css'
import { Link } from 'react-scroll'
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Lottie from 'lottie-react'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Image from 'next/image';
import { AiOutlineFilePdf } from 'react-icons/ai'
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'
import Mobilenav from './Mobilenav';

import useScrollTrigger from '@mui/material/useScrollTrigger';


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
const NavLinks = styled(Link)`
  color: white;
  &.active {
    color: #A378DF;
    
  }
  
`;

function Nav(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [navbar, setNavbar] = useState(false)
    const [hoverbutton, setHoverbutton] = useState(false)
    const [navname, setNavname] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [open, setOpen] = useState(false);
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();


    //background changing function
    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 80) {
                setNavbar(true);

            } else {
                setNavbar(false);

            }
        }
        window.addEventListener('scroll', changeBackground);


    }, [])

    return (
        <>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                
      <HideOnScroll {...props}>

                <AppBar
                    variant="permanent"
                    position="fixed"
                    sx={{
                        display: "flex", backgroundColor: "#D7CFE2 ",
                    }}
                    className={navbar ? Styles.Appbaractive : Styles.Appbar}
                    data-aos="fade-down"

                >
                    <Container maxWidth="xlg">
                        <Toolbar >
                            <Box display='flex' flexGrow={1} alignItems="center" justifyContent="space-between" sx={{ px: { sm: "10px", md: "20px" } }}>

                                <Typography  noWrap sx={{ flexGrow: 1, color: "text.primary", fontWeight: "bolder",fontSize:"30px",display:"none" }} >
                                    Nada
                                </Typography>
                                {/* <Box onClick={handleDrawerToggle} sx={{ display: { md: "none", sm: "flex" },justifyContent:"end", cursor: "pointer", position: "relative" }} className={hoverbutton ? Styles.hoverbuttonactive : Styles.hoverbutton}>
                                    <Box className={mobileOpen ? Styles.activeHamburger : Styles.hamburber} position="absolute"></Box>
                                </Box> */}
                                <Box sx={{ display: { xs: "none", sm: 'none', md: 'block', },textAlign:"end",position:"fixed",right:"30px" }}>
                              
                                    
                                    <ul className={Styles.menu}>
                                        <li><NavLinks to="home" spy={true} smooth={true} offset={0} duration={500} className={Styles.navlink}  >HOME</NavLinks>
                                            </li>
                                            <li className={Styles.separtator}>/</li>
                                        <li><NavLinks to="about" spy={true} smooth={true} offset={0} duration={500} className={Styles.navlink}  >ABOUT</NavLinks>
                                        </li>
                                        <li  className={Styles.separtator}>/</li>
                                        <li><NavLinks to="skills" spy={true} smooth={true} offset={0} duration={500} className={Styles.navlink}  >SKILLS</NavLinks>
                                        </li> 
                                        <li  className={Styles.separtator}>/</li>
                                        <li><NavLinks to="projects" spy={true} smooth={true} offset={0} duration={500} className={Styles.navlink}  >PROJECTS</NavLinks>
                                        </li>
                                        <li  className={Styles.separtator}>/</li>
                                        <li><NavLinks to="contact" spy={true} smooth={true} offset={0} duration={500} className={Styles.navlink}  >CONTACT</NavLinks>
                                            </li>
                                            <li  className={Styles.separtator}>/</li>
                                            <li><a href="https://drive.google.com/file/d/1YcF_MMWhJy-rOUUy7WnpB0JvTQxTOz83/view?usp=sharing"  target="_blank" className={Styles.nava} >CV</a>
                                            </li>

                                        
                                    </ul>
                                    {/* <List sx={{ display: "flex" }}>
                                    <ListItem>
                                            <NavLinks to="about" spy={true} smooth={true} offset={0} duration={500} className={Styles.navlink}  >

                                                <Typography variant="h6">HOME<span>/</span></Typography>
                                               

                                            </NavLinks>
                                        </ListItem>
                                        <ListItem>
                                            <NavLinks to="about" spy={true} smooth={true} offset={0} duration={500} className={Styles.navlink}  >

                                                <Typography variant="h6">ABOUT</Typography>
                                               

                                            </NavLinks>
                                        </ListItem>

                                        <ListItem>
                                            <NavLinks to="skills" spy={true} smooth={true} offset={0} duration={500} className={Styles.navlink} >

                                                <Typography variant="h6">SKILLS</Typography>
                                              


                                            </NavLinks>
                                        </ListItem>


                               
                                        <ListItem>
                                            <NavLinks to="projects" spy={true} smooth={true} offset={0} duration={500} className={Styles.navlink}  >

                                                <Typography variant="h6">PROJECTS</Typography>
                                               

                                            </NavLinks>
                                        </ListItem>



                                        <ListItem>
                                            <NavLinks to="contact" spy={true} smooth={true} offset={0} duration={500} className={Styles.navlink} >

                                                <Typography variant="h6">CONTACT</Typography>
                                                



                                            </NavLinks>
                                        </ListItem>

                                     
                                    </List> */}
                                       {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                {theme.palette.mode === 'dark' ? <LightModeIcon sx={{ color: "secondary.main" }} /> : <NightlightRoundIcon sx={{ color: "white" }} />}
                            </IconButton> */}
                                </Box>
                            </Box>
                        </Toolbar>
                        <Mobilenav />

                      
                    </Container>
                </AppBar>
                </HideOnScroll>

            </Box>
            <Mobilenav />
        </>

    )
}

export default Nav