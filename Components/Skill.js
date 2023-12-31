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
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ShareIcon from '@mui/icons-material/Share';
import ComputerIcon from '@mui/icons-material/Computer';
import Image from 'next/image'
import skill1 from '../public/assets/skills/html-1.svg'
import skill2 from '../public/assets/skills/CSS3_logo.svg.png'
import skill3 from '../public/assets/skills/6242e5dd4337267623f1e7a5_js.svg'
import skill4 from '../public/assets/skills/React-icon.svg.png'
import skill5A from '../public/assets/skills/material-ui-logo-5BDCB9BA8F-seeklogo.com.png'
import skill5 from '../public/assets/skills/Tailwind_CSS_Logo.svg.png'
import skill6 from '../public/assets/skills/Bootstrap_logo.svg.png'
import skill7 from '../public/assets/skills/redux.svg'
import skill8 from '../public/assets/skills/nextjs-icon.svg'
import skill8a from '../public/assets/skills/Typescript_logo_2020.svg.png'
import skill9 from '../public/assets/skills/nodejs-logo-FBE122E377-seeklogo.com.png'
import skill10 from '../public/assets/skills/erkxwhl1gd48xfhe2yld.png'
import skill11 from '../public/assets/skills/expressjs_logo_icon_169185.png'


function Skill() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box className={
                styles.mediumbackgoundskilllanding
            }></Box>

            <Box id="skills" pt="70px" pb="150px"
                className={
                    styles.skillbackground
            }>
                <Container>

                    <Box>
                        <Box display="flex" gap="20px">
                            <div className={
                                styles.titlesection
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
                                        data-aos-delay="100">k</span>
                                    <span class={
                                            styles.a
                                        }
                                        data-aos="zoom-in"
                                        data-aos-delay="150">i</span>
                                    <span class={
                                            styles.a
                                        }
                                        data-aos="zoom-in"
                                        data-aos-delay="200">l</span>
                                    <span class={
                                            styles.a
                                        }
                                        data-aos="zoom-in"
                                        data-aos-delay="250">l</span>
                                    <span class={
                                            styles.a
                                        }
                                        data-aos="zoom-in"
                                        data-aos-delay="300">s</span>


                                </h1>
                            </div>

                        </Box>
                        <Box textAlign="center" margin="auto" data-aos="fade-up">
                            <Typography variant='h6'>The skills, tools and technologies I use to bring your products to life:
                            </Typography>
                            {/* <Typography variant='h6'
                                sx={
                                    {color: "black"}
                            }>
                                project containing its own case study</Typography> */} </Box>
                        <Grid container direction="row" justifyContent="center" alignItems="center" py="0px" margin="auto"
                            spacing={2}
                            data-aos="fade-up">
                            <Grid item
                                md={2}
                                sm={4}
                                xs={6}
                                mt="20px">
                                <Paper sx={
                                        {border: "1.5px solid orange"}
                                    }
                                    square
                                    elevation={6}
                                    className={
                                        styles.skillbox
                                }>
                                    <Typography variant='h5'
                                        sx={
                                            {
                                                color: "black",
                                                mb: "5px"
                                            }
                                    }>Html</Typography>
                                    <Image src={skill1}
                                        width={40}
                                        alt="Picture of skill"/>
                                </Paper>
                            </Grid>
                            <Grid item
                                md={2}
                                sm={4}
                                xs={6}
                                mt="20px">
                                <Paper sx={
                                        {border: "1.5px solid #2A66F3"}
                                    }
                                    square
                                    elevation={6}
                                    className={
                                        styles.skillbox
                                }>
                                    <Typography variant='h5'
                                        sx={
                                            {
                                                color: "black",
                                                mb: "5px"
                                            }
                                    }>Css
                                    </Typography>
                                    <Image src={skill2}
                                        width={40}
                                        alt="Picture of skill"/>
                                </Paper>
                            </Grid>

                            <Grid item
                                md={2}
                                sm={4}
                                xs={6}
                                mt="20px">
                                <Paper sx={
                                        {border: "1.5px solid yellow"}
                                    }
                                    square
                                    elevation={6}
                                    className={
                                        styles.skillbox
                                }>
                                    <Typography variant='h5'
                                        sx={
                                            {
                                                color: "black",
                                                mb: "5px"
                                            }
                                    }>Javascript</Typography>
                                    <Image src={skill3}
                                        width={40}
                                        alt="Picture of skill"/>
                                </Paper>
                            </Grid>

                            <Grid item
                                md={2}
                                sm={4}
                                xs={6}
                                mt="20px">
                                <Paper sx={
                                        {border: "1.5px solid #6FDDFA"}
                                    }
                                    square
                                    elevation={6}
                                    className={
                                        styles.skillbox
                                }>
                                    <Typography variant='h5'
                                        sx={
                                            {
                                                color: "black",
                                                mb: "5px"
                                            }
                                    }>React.js</Typography>
                                    <Image src={skill4}
                                        width={40}
                                        alt="Picture of skill"/>
                                </Paper>
                            </Grid>
                            <Grid item
                                md={2}
                                sm={4}
                                xs={6}
                                mt="20px">
                                <Paper sx={
                                        {border: "1.5px solid #02B0FE"}
                                    }
                                    square
                                    elevation={6}
                                    className={
                                        styles.skillbox
                                }>
                                    <Typography variant='h5'
                                        sx={
                                            {
                                                color: "black",
                                                mb: "5px"
                                            }
                                    }>Material-UI</Typography>
                                    <Image src={skill5A}
                                        width={40}
                                        alt="Picture of skill"/>
                                </Paper>
                            </Grid>
                            <Grid item
                                md={2}
                                sm={4}
                                xs={6}
                                mt="20px">
                                <Paper sx={
                                        {border: "1.5px solid #0AB3D7"}
                                    }
                                    square
                                    elevation={6}
                                    className={
                                        styles.skillbox
                                }>
                                    <Typography variant='h5'
                                        sx={
                                            {
                                                color: "black",
                                                mb: "5px"
                                            }
                                    }>Tailwind</Typography>
                                    <Image src={skill5}
                                        width={40}
                                        alt="Picture of skill"/>
                                </Paper>
                            </Grid>
                            <Grid item
                                md={2}
                                sm={4}
                                xs={6}
                                mt="20px">
                                <Paper sx={
                                        {border: "1.5px solid #7111F3"}
                                    }
                                    square
                                    elevation={6}
                                    className={
                                        styles.skillbox
                                }>
                                    <Typography variant='h5'
                                        sx={
                                            {
                                                color: "black",
                                                mb: "5px"
                                            }
                                    }>Bootstrap</Typography>
                                    <Image src={skill6}
                                        width={40}
                                        alt="Picture of skill"/>
                                </Paper>
                            </Grid>
                            <Grid item
                                md={2}
                                sm={4}
                                xs={6}
                                mt="20px">
                                <Paper sx={
                                        {border: "1.5px solid #845DC3"}
                                    }
                                    square
                                    elevation={6}
                                    className={
                                        styles.skillbox
                                }>
                                    <Typography variant='h5'
                                        sx={
                                            {
                                                color: "black",
                                                mb: "5px"
                                            }
                                    }>Redux</Typography>
                                    <Image src={skill7}
                                        width={40}
                                        alt="Picture of skill"/>
                                </Paper>
                            </Grid>
                            <Grid item
                                md={2}
                                sm={4}
                                xs={6}
                                mt="20px">
                                <Paper sx={
                                        {border: "1.5px solid black"}
                                    }
                                    square
                                    elevation={6}
                                    className={
                                        styles.skillbox
                                }>
                                    <Typography variant='h5'
                                        sx={
                                            {
                                                color: "black",
                                                mb: "5px"
                                            }
                                    }>Next.js</Typography>
                                    <Image src={skill8}
                                        width={40}
                                        alt="Picture of skill"/>
                                </Paper>
                            </Grid>

                            <Grid item
                                md={2}
                                sm={4}
                                xs={6}
                                mt="20px">
                                <Paper sx={
                                        {border: "1.5px solid #3178C6"}
                                    }
                                    square
                                    elevation={6}
                                    className={
                                        styles.skillbox
                                }>
                                    <Typography variant='h5'
                                        sx={
                                            {
                                                color: "black",
                                                mb: "5px"
                                            }
                                    }>TypeScript</Typography>
                                    <Image src={skill8a}
                                        width={40}
                                        alt="Picture of skill"/>
                                </Paper>
                            </Grid>

                            <Grid item
                                md={2}
                                sm={4}
                                xs={6}
                                mt="20px">
                                <Paper sx={
                                        {border: "1.5px solid #5EA64F"}
                                    }
                                    square
                                    elevation={6}
                                    className={
                                        styles.skillbox
                                }>
                                    <Typography variant='h5'
                                        sx={
                                            {
                                                color: "black",
                                                mb: "5px"
                                            }
                                    }>Node.js</Typography>
                                    <Image src={skill9}
                                        width={40}
                                        alt="Picture of skill"/>
                                </Paper>
                            </Grid>
                            {/* <Grid item
                                md={2}
                                sm={4}
                                xs={6}
                                mt="20px">
                                <Paper sx={
                                        {border: "1.5px solid #5EA64F"}
                                    }
                                    square
                                    elevation={6}
                                    className={
                                        styles.skillbox
                                }>
                                    <Typography variant='h5'
                                        sx={
                                            {
                                                color: "black",
                                                mb: "5px"
                                            }
                                    }>Mongo DB</Typography>
                                    <Image src={skill10}
                                        width={40}
                                        alt="Picture of skill"/>
                                </Paper>
                            </Grid> */}
                            <Grid item
                                md={2}
                                sm={4}
                                xs={6}
                                mt="20px">
                                <Paper sx={
                                        {border: "1.5px solid black"}
                                    }
                                    square
                                    elevation={6}
                                    className={
                                        styles.skillbox
                                }>
                                    <Typography variant='h5'
                                        sx={
                                            {
                                                color: "black",
                                                mb: "5px"
                                            }
                                    }>express.js</Typography>
                                    <Image src={skill11}
                                        width={40}
                                        alt="Picture of skill"/>
                                </Paper>
                            </Grid>


                        </Grid>

                    </Box>

                </Container>
            </Box>
            <Box className={
                styles.mediumbackgoundskill
            }></Box>
        </>
    )
}

export default Skill
