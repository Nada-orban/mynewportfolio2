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
import {FaCss3Alt, FaReact, FaBootstrap, FaGithub} from 'react-icons/fa'
import {DiJavascript} from 'react-icons/di'
import {SiJavascript, SiNextdotjs, SiMui, SiTailwindcss} from 'react-icons/si'
import {TbWorld} from 'react-icons/tb'
import Image from 'next/image'
import exampleimage from '../public/assets/projects/Adidas Clone.png'
import LaunchIcon from '@mui/icons-material/Launch';
import DraftsIcon from '@mui/icons-material/Drafts';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {FiExternalLink} from 'react-icons/fi';
import {projectsdata} from '../data'


function Projects() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="projects" py="50px"
            className={
                styles.projectbackground
        }>
            <Container>
                <Box display="flex" gap="20px">
                    <div className={
                        styles.titlesection1
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
                <Box textAlign="center" margin="auto">
                    <Typography variant='h6'
                        sx={
                            {color: "background.main"}
                    }>Here you will find some of the personal and clients projects that I created with each
                    </Typography>
                    <Typography variant='h6'
                        sx={
                            {color: "background.main"}
                    }>
                        project containing its own case study</Typography>
                </Box>
                <Box my="70px">
                    {
                    projectsdata.map(project => {
                        return (
                            <>
                                <Grid container
                                    spacing={7}
                                    mb="100px"
                                    mt="50px"
                                    id={
                                        project.id
                                }>

                                    <Grid item
                                        md={6}
                                        xs={12}
                                        margin="auto"
                                        sx={
                                            {
                                                textAlign: {
                                                    xs: "center",
                                                    sm: "center",
                                                    md: "start"
                                                }
                                            }
                                    }>
                                        <Typography variant='h4'
                                            sx={
                                                {
                                                    color: "secondary.pink",
                                                    fontWeight: "bold"
                                                }
                                        }>
                                            {
                                            project.title
                                        }</Typography>
                                        <Typography variant='subtitle1'
                                            sx={
                                                {
                                                    my: "10px",
                                                    color: "background.main"
                                                }
                                        }>
                                            {
                                            project.body
                                        }</Typography>
                                        <Box display="flex" alignItems="center" gap="5px"
                                            sx={
                                                {
                                                    justifyContent: {
                                                        xs: "center",
                                                        sm: "center",
                                                        md: "start"
                                                    }
                                                }
                                        }>
                                            <AiFillHtml5 style={
                                                {
                                                    width: "20px",
                                                    height: "20px",
                                                    color: "white"
                                                }
                                            }/>
                                            <FaCss3Alt style={
                                                {
                                                    width: "20px",
                                                    height: "20px",
                                                    color: "white"
                                                }
                                            }/>
                                            <SiJavascript style={
                                                {
                                                    width: "20px",
                                                    height: "20px",
                                                    color: "white"
                                                }
                                            }/>

                                        </Box>
                                        <Box my="20px" gap="10px" display="flex"
                                            sx={
                                                {
                                                    justifyContent: {
                                                        xs: "center",
                                                        sm: "center",
                                                        md: "start"
                                                    }
                                                }
                                        }>
                                            {/* <Paper elevation={4}
                                            sx={
                                                {borderRadius: "10px"}
                                        }> */}
                                            <a href={
                                                    project.code
                                                }
                                                target="_blank">
                                                <button className={
                                                    styles.button89
                                                }>
                                                    <Typography>View It Here</Typography><FiExternalLink className={
                                                        styles.iconlink
                                                    }/>
                                                </button>
                                            </a>

                                            {/* </Paper> */}
                                            <a href={
                                                project.github
                                            }>
                                                <button className={
                                                    styles.button89
                                                }>
                                                    <Typography>
                                                        View Github Repo</Typography><FiExternalLink className={
                                                        styles.iconlink
                                                    }/>

                                                </button>
                                            </a>


                                        </Box>
                                    </Grid>
                                    <Grid item
                                        md={6}
                                        xs={12}
                                        sx={
                                            {
                                                order: {
                                                    xs: -1,
                                                    sm: -1,
                                                    md: 1
                                                }
                                            }
                                    }>
                                        <Box sx={
                                            {
                                                display: {
                                                    xs: "none",
                                                    sm: "block",
                                                    md: "block"
                                                },
                                                margin: "auto"
                                            }
                                        }>
                                            <img src={
                                                    project.image
                                                }
                                                alt='project photo'
                                                className={
                                                    styles.boximage
                                                }/> {/* <Image src={
                                                project.image
                                            }
                                            width={650}
                                            height={400}/> */} </Box>
                                        <Box sx={
                                            {
                                                display: {
                                                    xs: "block",
                                                    sm: "none",
                                                    md: "none"
                                                }
                                            }
                                        }>
                                            <img src={
                                                    project.image
                                                }
                                                alt='project photo'
                                                className={
                                                    styles.boximagesmall
                                                }/>
                                        </Box>


                                    </Grid>

                                </Grid>
                                <Grid container
                                    spacing={7}>
                                    <Grid item
                                        md={6}
                                        xs={12}
                                        id={
                                            project.id2
                                    }>
                                        <Box sx={
                                            {
                                                display: {
                                                    xs: "none",
                                                    sm: "block",
                                                    md: "block"
                                                }

                                            }
                                        }>
                                            <img src={
                                                    project.image2
                                                }
                                                alt='project photo'
                                                className={
                                                    styles.boximage
                                                }/>
                                        </Box>
                                        <Box sx={
                                            {
                                                display: {
                                                    xs: "block",
                                                    sm: "none",
                                                    md: "none"
                                                }
                                            }
                                        }>
                                            <img src={
                                                    project.image2
                                                }
                                                alt='project photo'
                                                className={
                                                    styles.boximagesmall
                                                }/>
                                        </Box>

                                    </Grid>
                                    <Grid item
                                        md={6}
                                        xs={12}
                                        sx={
                                            {
                                                textAlign: {
                                                    xs: "center",
                                                    sm: "center",
                                                    md: "start"
                                                }
                                            }
                                    }>
                                        <Typography variant='h4'
                                            sx={
                                                {
                                                    color: "secondary.pink",
                                                    fontWeight: "bold"
                                                }
                                        }>
                                            {
                                            project.title2
                                        }</Typography>
                                        <Typography variant='subtitle1'
                                            sx={
                                                {
                                                    my: "10px",
                                                    color: "background.main"
                                                }
                                        }>
                                            {
                                            project.body2
                                        }</Typography>
                                        <Box display="flex" alignItems="center" gap="5px"
                                            sx={
                                                {
                                                    justifyContent: {
                                                        xs: "center",
                                                        sm: "center",
                                                        md: "start"
                                                    }
                                                }
                                        }>
                                            <AiFillHtml5 style={
                                                {
                                                    width: "20px",
                                                    height: "20px",
                                                    color: "white"
                                                }
                                            }/>
                                            <FaCss3Alt style={
                                                {
                                                    width: "20px",
                                                    height: "20px",
                                                    color: "white"
                                                }
                                            }/>
                                            <SiJavascript style={
                                                {
                                                    width: "20px",
                                                    height: "20px",
                                                    color: "white"
                                                }
                                            }/>

                                        </Box>
                                        <Box my="20px" gap="10px" display="flex"
                                            sx={
                                                {
                                                    justifyContent: {
                                                        xs: "center",
                                                        sm: "center",
                                                        md: "start"
                                                    }
                                                }
                                        }>
                                            {/* <Paper elevation={4}
                                                sx={
                                                    {borderRadius: "10px"}
                                            }> */}
                                            <a href={
                                                    project.code2
                                                }
                                                target="_blank">
                                                <button className={
                                                    styles.button89
                                                }>
                                                    <Typography>View It Here</Typography><FiExternalLink className={
                                                        styles.iconlink
                                                    }/>
                                                </button>
                                            </a>
                                            {/* </Paper> */}
                                            <a href={
                                                project.github2
                                            }>
                                                <button className={
                                                    styles.button89
                                                }>
                                                    <Typography>
                                                        View Github Repo</Typography><FiExternalLink className={
                                                        styles.iconlink
                                                    }/>

                                                </button>
                                            </a>


                                        </Box>
                                    </Grid>


                                </Grid>
                            </>
                        )
                    })
                } </Box>

            </Container>
        </Box>
    )
}

export default Projects
