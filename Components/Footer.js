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
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider
} from '@mui/material'
import styles from '../src/styles/Home.module.css'
import {ColorModeContext} from '../public/theme'
import {styled, useTheme, alpha} from '@mui/material/styles';
import {FiFacebook, FiLinkedin, FiGithub} from 'react-icons/fi'
import {SiUpwork} from 'react-icons/si'
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link'

function Footer() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
        <Divider sx={{ backgroundColor: "white", }} />
        <Box id="footer" >
            <Container maxWidth="xlg">
                <Box sx={{ px: { sm: "10px", md: "40px" },my:"20px" }}>

                            <Typography variant='h6' sx={{ textAlign: "center" }}>© 2023 | Designed & coded with by Nada Samir</Typography>

                            <Box display="flex" sx={{ justifyContent: "center", mt: "10px" }} alignItems="center" gap="20px" >
                                <Link href="mailto:nadasamireldesoky@gmail.com" target="_blank"><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "secondary.main",backgroundImage: "linear-gradient(to left top, #ddabea, #d19de7, #c390e4, #b484e1, #a378df)", color: "white" }} className={styles.nadaavatar}><EmailIcon /></Avatar></Link>
                                <Link href="https://www.linkedin.com/in/nada-samir-441a58130/" target="_blank"><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "secondary.main",backgroundImage: "linear-gradient(to left top, #ddabea, #d19de7, #c390e4, #b484e1, #a378df)", color: "white" }} className={styles.nadaavatar}><FiLinkedin /></Avatar></Link>
                                <Link href="https://github.com/Nada-orban" target="_blank"><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "secondary.main",backgroundImage: "linear-gradient(to left top, #ddabea, #d19de7, #c390e4, #b484e1, #a378df)", color: "white" }} className={styles.nadaavatar}><FiGithub /></Avatar></Link>
                                <Link href="https://www.upwork.com/freelancers/~0158c861bae4be2e7b" target="_blank"><Avatar sx={{ width: "30px", height: "30px", backgroundColor: "secondary.main",backgroundImage: "linear-gradient(to left top, #ddabea, #d19de7, #c390e4, #b484e1, #a378df)", color: "white" }} className={styles.nadaavatar}><SiUpwork /></Avatar></Link>
                            </Box>
 
                </Box>
             


            </Container>

        </Box >
    </>
    )
}

export default Footer
