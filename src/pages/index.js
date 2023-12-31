import Head from 'next/head'
import React from 'react'
import {
    Box,
    Tabs,
    Tab,
    Typography,
    LinkTab,
    Grid,
    Button,
    Container,
    Avatar,
    Toolbar,
    Paper
} from '@mui/material'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.css'
import CssBaseline from '@mui/material/CssBaseline';
import {projectsdata} from '../../data'
import {ColorModeContext} from '../../public/theme'
import {styled, useTheme, alpha} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Nav from '../../Components/Nav'
import Skill from "../../Components/Skill"
import Projects from '../../Components/Projects'
import Contact from '../../Components/Contact'
import About from '../../Components/About'
import Landing from '../../Components/Landing'
import Footer from '../../Components/Footer'


export default function Home({photo}) {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Head>
                <title>Nada Samir Orban</title>
                <meta name="description" content="Nada Samir Portfolio"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:title" content="Nada Samir "/>
                <meta property="og:image" content="/n.jpg"/>
                <link rel="icon" href="/n.jpg"/>
                <link rel="icon" href="%PUBLIC_URL%/logonada.png"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

            </Head>

            <main>
                <Nav/>
                <Landing/>
                <About/>
                <Skill/>
                <Projects/>
                <Contact/>
                <Footer/>


            </main>


        </>
    )
}
