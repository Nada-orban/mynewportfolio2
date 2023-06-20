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
import {styled, useTheme, alpha} from '@mui/material/styles'
import {Link} from 'react-scroll'
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiUpwork, SiGooglescholar } from 'react-icons/si'
import EmailIcon from '@mui/icons-material/Email';

function Landing() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="home"  height="100vh" sx={{pt:{xs:"50%",sm:"30%",md:"15%"},position:"relative"}}  className={styles.landingbackground}>
            <Container>
                <Box display="flex" gap="15px" margin="auto" justifyContent="center" >
                    <div className={
                        styles.titlesection1
                    }>
                        <h1>
                            <span className={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="50">H</span>
                                
                            <span className={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="100">I</span>
                            <span className={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="150">,</span>


                        </h1>
                    </div>
                    <div className={
                        styles.titlesection1
                    }>
                        <h1>
                            <span className={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="200">I</span>
                            <span className={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="250">'</span>
                            <span className={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="300">M</span>


                        </h1>
                    </div>
                    <div className={
                        styles.titlesection1
                    }>
                        <h1>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="50">N</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="100">A</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="200">D</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="300">A</span>

                        </h1>
                    </div>
                    {/* <div className={
                        styles.titlesection1
                    }>
                        <h1>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="50">S</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="100">A</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="200">M</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="300">I</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="300">R</span>

                        </h1>
                    </div> */} </Box>
                <Box>
                    <Typography variant='h5'
                        sx={
                            {
                                textAlign: "center",
                                color: "neutral.lightpink"
                            }
                    }>FRONT END DEVELOPER</Typography>
                    <Box display="grid" sx={{position:"absolute",backgroundColor:"white",p:" 30px 15px",left:"-6px",top:"35%", borderRadius:"10px", mt: { sm: "0px", }, mb: "30px" }} alignItems="center" gap="20px" data-aos="fade-up" data-aos-delay="1350">
                            <a href="mailto:ahmadadelattia@gmail.com" target="_blank"><Avatar  sx={{ width: "30px", height: "30px", backgroundColor: "neutral.lightpink", color: "white" }} className={styles.nadaavatar}><EmailIcon /></Avatar></a>
                            <a href="https://www.linkedin.com/in/ahmedadelattia" target="_blank" ><Avatar  sx={{ width: "30px", height: "30px", backgroundColor: "neutral.lightpink", color: "white" }} className={styles.nadaavatar}><FiLinkedin /></Avatar></a>
                            <a href="https://github.com/ahmedadelattia" target="_blank"><Avatar  sx={{ width: "30px", height: "30px", backgroundColor: "neutral.lightpink", color: "white" }} className={styles.nadaavatar}><FiGithub /></Avatar></a>
                            <a href="https://scholar.google.com/citations?user=x2TMhSQAAAAJ&hl=en&oi=sra" target="_blank"><Avatar  sx={{ width: "30px", height: "30px", backgroundColor: "neutral.lightpink", color: "white" }} className={styles.nadaavatar}><SiUpwork /></Avatar></a>
                        </Box>
                </Box>


            </Container>
        </Box>
    )
}

export default Landing
