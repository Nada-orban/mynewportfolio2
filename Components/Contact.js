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
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const [state, handleSubmit] = useForm("moqzolwp");
    return (
        <Box id="contact" py="50px">
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
                    <div className={
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
                    </div>
                </Box>
                <Box>
                <form onSubmit={handleSubmit}  >
                                <Box mb="20px">
                                    <Box gap="5px" mb="10px" mt="30px" sx={{ display: { sm: 'grid', md: "flex" } }}>
                                        <TextField
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="top-bottom"
                                            // sx={{ '& .css-14m6kzo-MuiInputBase-root-MuiFilledInput-root.Mui-focused': { backgroundColor: "neutral.white" } }}
                                            id="name"
                                            name="name"
                                            type="name"
                                            label="Name"
                                            variant="filled"
                                            color="secondary"
                                            style={{
                                                backgroundColor: "#055f6946", width: "100%"
                                            }}
                                            InputProps={{
                                                style: {
                                                    color: "white"
                                                }
                                            }}
                                            f
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
                                            label="Email"
                                            variant="filled"
                                            color="secondary"

                                            style={{
                                                backgroundColor: "#055f6946", width: "100%",
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
                                    <Box mb="10px" data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom" >
                                        <TextField


                                            id="subject"
                                            name="subject"
                                            label="Subject"
                                            color="secondary"
                                            variant="filled"
                                            multiline


                                            style={{
                                                backgroundColor: "#055f6946", width: "100%"
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
                                        />


                                    </Box>

                                    <TextField
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                        id="message"
                                        name="message"
                                        label="Message"
                                        color="secondary"
                                        variant="filled"
                                        multiline
                                        rows={6}

                                        style={{
                                            backgroundColor: "#055f6946", width: "100%"
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
                                    />
                                </Box>

                                <button className={styles.buttonstyle} type="submit" data-aos="fade-right" >
                                  
                                   
                                        Send
                                        {/* <EastIcon sx={{ ml: "30px", width: "50px", height: "30px" }} className={styles.normalButton2icon} /> */}
                                   

                                </button>
                            </form>
                </Box>
            </Container>
        </Box>
    )
}

export default Contact
