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
import profilephoto from '../public/assets/about/353824194_295336369500269_6820613116304325861_n.jpg'


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
        <Box id="about" py="50px">
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
                <Grid container>
                    <Grid item
                        md={6}
                        xs={12}>
                        <Box borderRadius="10px">
                            <Image src={profilephoto}
                                width={400}
                                className={
                                    styles.photoabout
                                }/>
                        </Box>
                    </Grid>
                    <Grid item
                        md={6}
                        xs={12}>
                        <Box my="50px">
                            <Typography variant='h6'>I have experience in developing responsive, user-friendly web applications using HTML, CSS, and JavaScript. I specialize in working with React, Next.js, Bootstrap, and Material UI to create beautiful and intuitive interfaces.</Typography>
                            <Typography variant="h6">I have a strong eye for design and enjoy collaborating with designers to cre- ate visually stunning interfaces that enhance the user experience. I stay up- to-date with the latest technologies and trends in front-end development and am always looking for ways to improve my skills</Typography>
                        </Box>

                        <NavLinks to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            <button className={
                                styles.buttonstyle
                            }>

                                <Typography>Get In Touch!</Typography>
                            </button>
                        </NavLinks>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default About
