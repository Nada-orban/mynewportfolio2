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
import styles from '../src/styles/Home.module.css'
import {ColorModeContext} from '../public/theme'
import {styled, useTheme, alpha} from '@mui/material/styles';
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt, FaReact, FaBootstrap} from 'react-icons/fa'
import {DiJavascript} from 'react-icons/di'
import {SiJavascript, SiNextdotjs, SiMui, SiTailwindcss} from 'react-icons/si'

function Projects() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="skills" py="50px">
            <Container>
                <Box display="flex" gap="20px" mb="20px">
                    <div className={
                        styles.titlesection
                    }>
                        <h1>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="50">P</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="100">r</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="150">o</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="200">j</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="250">e</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="300">c</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="350">t</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="400">s</span>

                        </h1>
                    </div>
                </Box>
                <Box>
                    <Grid container>
                        <Grid item
                            md={6}
                            xs={12}>
                            <Typography variant='h4'>Personal Date Night</Typography>
                            <Typography variant='subtitle1'
                                sx={
                                    {my: "10px"}
                            }>For when you need a break from your partner but already got a babysitter. Now couples can go to different events in similar locations and at the same time. A group programming project with Can Rozanes, Irene Truong and Jamie Yeung.</Typography>
                            <Box display="flex" justifyContent="start" alignItems="center" gap="5px">
                                <AiFillHtml5 style={
                                    {
                                        width: "20px",
                                        height: "20px"
                                    }
                                }/>
                                <FaCss3Alt style={
                                    {
                                        width: "20px",
                                        height: "20px"
                                    }
                                }/>
                                <SiJavascript style={
                                    {
                                        width: "20px",
                                        height: "20px"
                                    }
                                }/>

                            </Box>
                            <Box my="20px" gap="10px" display="flex">
                                <button>View It Here</button>
                                <button>View Github Repo</button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </Box>
    )
}

export default Projects
