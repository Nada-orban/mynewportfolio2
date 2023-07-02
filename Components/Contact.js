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
import TextField from '@mui/material/TextField';
import Link from 'next/link'
import {useForm, ValidationError} from '@formspree/react';
import DraftsIcon from '@mui/icons-material/Drafts';
import {HiOutlineMailOpen} from 'react-icons/hi'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EastIcon from '@mui/icons-material/East';


function Contact() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const [state, handleSubmit] = useForm("moqoargq");
    return (
        <>
            <Box className={
                styles.mediumbackgoundcontact
            }></Box>
            <Box id="contact" py="50px"
                className={
                    styles.contactbackground
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
                                    data-aos-delay="50">C</span>
                                <span class={
                                        styles.a
                                    }
                                    data-aos="zoom-in"
                                    data-aos-delay="100">o</span>
                                <span class={
                                        styles.a
                                    }
                                    data-aos="zoom-in"
                                    data-aos-delay="150">n</span>
                                <span class={
                                        styles.a
                                    }
                                    data-aos="zoom-in"
                                    data-aos-delay="200">t</span>
                                <span class={
                                        styles.a
                                    }
                                    data-aos="zoom-in"
                                    data-aos-delay="250">a</span>
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

                            </h1>
                        </div>

                        {/* <div className={
                        styles.titlesection
                    }>
                        <h1>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="400">m</span>
                            <span class={
                                    styles.a
                                }
                                data-aos="zoom-in"
                                data-aos-delay="450">e</span>
                        </h1>
                    </div> */} </Box>
                    <Box textAlign="center" margin="auto" data-aos="fade-up">
                        <Typography variant='h6'>Feel free to Contact me by submitting the form below and I will get back to you
                        </Typography>
                        <Typography variant='h6'>
                            as soon as possible</Typography>
                    </Box>

                    {/* <Box display="flex" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <AttachEmailIcon sx={
                        {
                            mt: "5px",
                            marginRight: "3px"
                        }
                    }/> 
                    <Link href="mailto:ahmadadelattia@gmail.com"
                        className={
                            styles.myEmail
                    }>
                        <Typography variant='h5'
                            sx={
                                {color: "secondary.main"}
                            }
                            className={
                                styles.linkText
                        }>
                            ahmadadelattia@gmail.com</Typography>
                    </Link>
                </Box> */}
                    {/* <Box display="flex" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <PhoneIphoneIcon sx={
                        {mt: "5px"}
                    }/> 
                    <Typography variant='h5'
                        className={
                            styles.linkText
                    }>
                        (+1) 469-596-4371</Typography>

                   </Box> */}
                    <Paper elevation={4}
                        sx={
                            {
                                backgroundColor: "white",
                                p: "25px 20px",
                                borderRadius: "10px",
                                m: "30px"
                            }
                        }
                        data-aos="fade-right">
                        <form onSubmit={handleSubmit}>
                            <Box mb="20px">
                                <Box display="grid">
                                    <label for="fname"
                                        className={
                                            styles.labelform
                                    }>
                                        Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder=" Enter Your name"
                                        className={
                                            styles.forminput
                                        }/>

                                </Box>
                                <Box display="grid">
                                    <label for="email"
                                        className={
                                            styles.labelform
                                    }>
                                        Email</label>
                                    <input type="email" id="email" name="email" placeholder=" Enter Your Email"
                                        className={
                                            styles.forminput
                                        }/>

                                </Box>
                                <Box display="grid">
                                    <label for="message"
                                        className={
                                            styles.labelform
                                    }>
                                        Message</label>
                                    <textarea id="message" name="message" placeholder=" Enter Your Message"
                                        className={
                                            styles.forminput2
                                        }/>


                                </Box>
                                {/* <Box gap="5px" mb="10px" mt="30px" sx={{ display: "grid" }}>
                                        
                                     
                                        <TextField
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom"
                                            
                                            id="name"
                                            name="name"
                                            type="name"
                                            label=" Enter Your Name"
                                            variant="filled"
                                            color="secondary"
                                            style={{
                                                backgroundColor: "#F0F0F0", width: "100%"
                                            }}
                                            InputProps={{
                                                style: {
                                                    color: "black"
                                                }
                                            }}
                                            
                                        />
                                        <ValidationError
                                            prefix="Name"
                                            field="name"
                                            errors={state.errors}
                                        />
                                        <TextField
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom"
                                            sx={{ mt: { xs: "10px", md: '0px' } }}
                                            id="email"
                                            name="email"
                                            type="email"
                                            label="Enter Your Email"
                                            variant="filled"
                                            color="secondary"

                                            style={{
                                                backgroundColor: "#F0F0F0", width: "100%",
                                            }}
                                            InputProps={{
                                                style: {
                                                    color: "white"
                                                }
                                            }}



                                        />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </Box>
                              

                                    <TextField
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                        id="message"
                                        name="message"
                                        label="Enter Your Message"
                                        color="secondary"
                                        variant="filled"
                                        multiline
                                        rows={6}

                                        style={{
                                            backgroundColor: "#F0F0F0", width: "100%"
                                        }}
                                        InputProps={{
                                            style: {
                                                color: "white"
                                            }
                                        }}




                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    /> */} </Box>
                            <button type="submit"
                                className={
                                    styles.button92
                            }>
                                <Typography>Send</Typography>
                            </button>
                            {/* <Paper elevation={4}
                                sx={
                                    {
                                        borderRadius: "10px",
                                        width: "fit-content"
                                    }
                            }>
                                <button className={
                                        styles.buttonstyle
                                    }
                                    type="submit"
                                    data-aos="fade-right">
                                    <Typography>Send Email</Typography><DraftsIcon className={
                                        styles.iconlink
                                    }/> <EastIcon sx={{ ml: "30px", width: "50px", height: "30px" }} className={styles.normalButton2icon} /> </button>
                            </Paper>
 */} </form>
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default Contact
