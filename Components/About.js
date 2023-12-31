import {
    Box,
    Tabs,
    Tab,
    Typography,
    LinkTab,
    Grid,
    Button,
    Container,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Avatar
} from '@mui/material'
import React from 'react'
import styles from '../src/styles/Home.module.css'
import Image from 'next/image'
import {ColorModeContext} from '../public/theme'
import {styled, useTheme, alpha} from '@mui/material/styles';
import {Toys} from '@mui/icons-material'
import {Link} from 'react-scroll'
import profilephoto from '../public/assets/about/353087579_795325908762859_926682285706518817_n.jpg'


const NavLinks = styled(Link)`
  color: #0F6973;
  &.active {
    color: #F7AE9D;
    
  }
  
`;

function About() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="about" py="50px"
            className={
                styles.aboutbackground
        }>
            <Container>
                <Box display="flex" gap="20px">
                    <div className={
                        styles.titlesection
                    }>
                        <h1>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="50">A</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="100">b</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="200">o</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="300">u</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="400">t</span>

                        </h1>
                    </div>
                </Box>
                <Grid container mt="50px">
                    <Grid item
                        md={6}
                        xs={12}
                        justifyContent="center"
                        display="flex"
                        margin="auto"
                        data-aos="fade-right">
                        <Box borderRadius="10px"
                            sx={
                                {
                                    display: {
                                        xs: "none",
                                        sm: "block"
                                    }
                                }
                        }>
                            <Image src={profilephoto}
                                width={350}
                                className={
                                    styles.photoabout
                                }/>
                        </Box>
                        <Box borderRadius="10px"
                            sx={
                                {
                                    display: {
                                        xs: "block",
                                        sm: "none"
                                    }
                                }
                        }>
                            <Image src={profilephoto}
                                width={300}
                                className={
                                    styles.photoabout
                                }/>
                        </Box>
                    </Grid>
                    <Grid item
                        md={6}
                        xs={12}
                        data-aos="fade-left">
                        <Box my="50px "
                            sx={
                                {
                                    textAlign: {
                                        xs: "center",
                                        sm: "center",
                                        md: "start"
                                    }
                                }
                        }>
                            <Typography variant='h6'>I have experience in developing responsive, user-friendly web applications using HTML, CSS, and JavaScript. I specialize in working with React, Next.js, Bootstrap, and Material UI to create beautiful and intuitive interfaces.</Typography>
                            <Typography variant="h6">I have a strong eye for design and enjoy collaborating with designers to cre- ate visually stunning interfaces that enhance the user experience. I stay up- to-date with the latest technologies and trends in front-end development and am always looking for ways to improve my skills</Typography>
                        </Box>

                        <NavLinks to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            sx={
                                {
                                    display: "flex",
                                    justifyContent: {
                                        sm: "center",
                                        xs: "center",
                                        md: "start"
                                    }
                                }
                        }>
                            {/* <Paper elevation={4}
                                sx={
                                    {borderRadius: "10px"}
                            }> */}
                            <button className={
                                styles.button90
                            }>
                                <Typography>Get In Touch!</Typography>
                            </button>
                            {/* </Paper> */}
                            {/* <Box justifyContent="center" display="flex">
                                <Link to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}>
                                    <Box width="110px" height="50px"
                                        className={
                                            styles.w
                                    }>

                                        <Box className={
                                                styles.l
                                            }
                                            width="110px"
                                            height="50px">
                                            <Box className={
                                                styles.c2
                                            }>
                                                <Box className={
                                                    styles.firstviewabout
                                                }></Box>
                                                <Box className={
                                                    styles.secoundviewabout
                                                }></Box>

                                            </Box>
                                        </Box>
                                    </Box>
                                </Link>

                            </Box> */} </NavLinks>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default About
