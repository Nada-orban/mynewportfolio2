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
import {FiFacebook, FiLinkedin, FiGithub} from 'react-icons/fi'
import {SiUpwork, SiGooglescholar, SiFreelancer} from 'react-icons/si'
import EmailIcon from '@mui/icons-material/Email';

function Landing() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="home" height="100vh"
            sx={
                {
                    pt: {
                        xs: "50%",
                        sm: "30%",
                        md: "15%"
                    }
                }
            }
            className={
                styles.landingbackground
        }>
            <Container>
                <Box gap="15px" margin="auto" justifyContent="center" textAlign="center"
                    sx={
                        {
                            display: {
                                sm: "flex",
                                md: "flex"
                            }
                        }
                }>


                    <Box width="110px" height="160px"
                        className={
                            styles.w
                    }>
                        <Box className={
                                styles.l
                            }
                            width="61px"
                            height="160px">
                            <Box className={
                                styles.c1
                            }>
                                <Box className={
                                    styles.firstview
                                }></Box>
                                <Box className={
                                    styles.secoundview
                                }></Box>

                            </Box>
                        </Box>
                        <Box className={
                                styles.l
                            }
                            width="27px"
                            height="160px">
                            <Box className={
                                styles.c2
                            }>
                                <Box className={
                                    styles.firstview2
                                }></Box>
                                <Box className={
                                    styles.secoundview2
                                }></Box>

                            </Box>
                        </Box>
                        <Box className={
                                styles.l
                            }
                            width="22px"
                            height="160px">
                            <Box className={
                                styles.c1
                            }>
                                <Box className={
                                    styles.firstview3
                                }></Box>
                                <Box className={
                                    styles.secoundview3
                                }></Box>

                            </Box>
                        </Box>

                    </Box>
                    <Box width="112px" height="160px"
                        className={
                            styles.w
                    }>

                        <Box className={
                                styles.l
                            }
                            width="27px"
                            height="160px">
                            <Box className={
                                styles.c2
                            }>
                                <Box className={
                                    styles.firstview2
                                }></Box>
                                <Box className={
                                    styles.secoundview2
                                }></Box>

                            </Box>
                        </Box>
                        <Box className={
                                styles.l
                            }
                            width="85px"
                            height="160px">
                            <Box className={
                                styles.c1
                            }>
                                <Box className={
                                    styles.firstview4
                                }></Box>
                                <Box className={
                                    styles.secoundview4
                                }></Box>

                            </Box>
                        </Box>

                    </Box>
                    <Box width="256px" height="160px"
                        className={
                            styles.w
                    }>
                        <Box className={
                                styles.l
                            }
                            width="63px"
                            height="160px">
                            <Box className={
                                styles.c1
                            }>
                                <Box className={
                                    styles.firstview5
                                }></Box>
                                <Box className={
                                    styles.secoundview5
                                }></Box>

                            </Box>
                        </Box>

                        <Box className={
                                styles.l
                            }
                            width="66px"
                            height="160px">
                            <Box className={
                                styles.c2
                            }>
                                <Box className={
                                    styles.firstview6
                                }></Box>
                                <Box className={
                                    styles.secoundview6
                                }></Box>

                            </Box>
                        </Box>

                        <Box className={
                                styles.l
                            }
                            width="61px"
                            height="160px">
                            <Box className={
                                styles.c1
                            }>
                                <Box className={
                                    styles.firstview7
                                }></Box>
                                <Box className={
                                    styles.secoundview7
                                }></Box>

                            </Box>
                        </Box>
                        <Box className={
                                styles.l
                            }
                            width="66px"
                            height="160px">
                            <Box className={
                                styles.c2
                            }>
                                <Box className={
                                    styles.firstview6
                                }></Box>
                                <Box className={
                                    styles.secoundview6
                                }></Box>

                            </Box>
                        </Box>

                    </Box>
                    <Box sx={
                        {
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "block"
                            }

                        }
                    }>
                        <Box width="304px" height="160px"

                            className={
                                styles.w
                        }>
                            <Box className={
                                    styles.l
                                }
                                width="62px"
                                height="160px">
                                <Box className={
                                    styles.c1
                                }>
                                    <Box className={
                                        styles.firstviewS
                                    }></Box>
                                    <Box className={
                                        styles.secoundviewS
                                    }></Box>

                                </Box>
                            </Box>

                            <Box className={
                                    styles.l
                                }
                                width="66px"
                                height="160px">
                                <Box className={
                                    styles.c2
                                }>
                                    <Box className={
                                        styles.firstview6
                                    }></Box>
                                    <Box className={
                                        styles.secoundview6
                                    }></Box>

                                </Box>
                            </Box>
                            <Box className={
                                    styles.l
                                }
                                width="85px"
                                height="160px">
                                <Box className={
                                    styles.c1
                                }>
                                    <Box className={
                                        styles.firstview4
                                    }></Box>
                                    <Box className={
                                        styles.secoundview4
                                    }></Box>

                                </Box>
                            </Box>
                            <Box className={
                                    styles.l
                                }
                                width="27px"
                                height="160px">
                                <Box className={
                                    styles.c2
                                }>
                                    <Box className={
                                        styles.firstview2
                                    }></Box>
                                    <Box className={
                                        styles.secoundview2
                                    }></Box>

                                </Box>
                            </Box>
                            <Box className={
                                    styles.l
                                }
                                width="64px"
                                height="160px">
                                <Box className={
                                    styles.c2
                                }>
                                    <Box className={
                                        styles.firstviewr
                                    }></Box>
                                    <Box className={
                                        styles.secoundviewr
                                    }></Box>

                                </Box>
                            </Box>


                        </Box>
                    </Box>
                    {/* <div className={
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
                    </div> */}
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
                    }>I'M A FRONT END DEVELOPER</Typography>
                    <Box display="flex"
                        sx={
                            {
                                left: "-6px",
                                top: "35%",
                                borderRadius: "10px",
                                mt: "20px",
                                mb: "30px",
                                justifyContent: "center"
                            }
                        }
                        alignItems="center"
                        gap="20px"
                        data-aos="fade-up"
                        data-aos-delay="1350">
                        <a href="mailto:nadasamir9334@gmail.com" target="_blank">
                            <Avatar sx={
                                    {
                                        width: "30px",
                                        height: "30px",
                                        backgroundColor: "neutral.lightpink",
                                        color: "white"
                                    }
                                }
                                className={
                                    styles.nadaavatar
                            }><EmailIcon/></Avatar>
                        </a>
                        <a href="https://www.linkedin.com/in/nada-samir-441a58130/" target="_blank">
                            <Avatar sx={
                                    {
                                        width: "30px",
                                        height: "30px",
                                        backgroundColor: "neutral.lightpink",
                                        color: "white"
                                    }
                                }
                                className={
                                    styles.nadaavatar
                            }><FiLinkedin/></Avatar>
                        </a>
                        <a href="https://github.com/Nada-orban" target="_blank">
                            <Avatar sx={
                                    {
                                        width: "30px",
                                        height: "30px",
                                        backgroundColor: "neutral.lightpink",
                                        color: "white"
                                    }
                                }
                                className={
                                    styles.nadaavatar
                            }><FiGithub/></Avatar>
                        </a>
                        <a href="https://www.upwork.com/freelancers/~0158c861bae4be2e7b" target="_blank">
                            <Avatar sx={
                                    {
                                        width: "30px",
                                        height: "30px",
                                        backgroundColor: "neutral.lightpink",
                                        color: "white"
                                    }
                                }
                                className={
                                    styles.nadaavatar
                            }><SiUpwork/></Avatar>
                        </a>
                        <a href="https://www.freelancer.com/u/nadaSamir2020" target="_blank">
                            <Avatar sx={
                                    {
                                        width: "30px",
                                        height: "30px",
                                        backgroundColor: "neutral.lightpink",
                                        color: "white"
                                    }
                                }
                                className={
                                    styles.nadaavatar
                            }><SiFreelancer/></Avatar>
                        </a>
                    </Box>
                </Box>
                <Box justifyContent="center" display="flex">
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
                                        styles.firstview111
                                    }></Box>
                                    <Box className={
                                        styles.secoundview111
                                    }></Box>

                                </Box>
                            </Box>
                        </Box>
                    </Link>

                </Box>


            </Container>
        </Box>
    )
}

export default Landing
