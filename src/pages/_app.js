import '../styles/globals.css'
import {useEffect} from "react";
import {ThemeProvider, CssBaseline} from '@mui/material';
import {ColorModeContext, useMode} from '../../public/theme'
import {useRouter} from 'next/router';
import {styled, useTheme, alpha} from '@mui/material/styles';
// import Drawer1 from '../../Components/Drawer1'
import {Philosopher} from 'next/font/google'


import AOS from "aos";

import "aos/dist/aos.css";

const philosopher = Philosopher({weight: '400', subsets: ['latin']});

export default function App({Component, pageProps}) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
            delay: 400,
            duration: 1000
        });
    }, []);
    const [theme, colorMode] = useMode();
    const router = useRouter();
    const {Path} = router;
    // #030218de
    // #212A3E
    // #050416de
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <main className={
                    philosopher.className
                }><Component {...pageProps}/></main>


                <style jsx global>
                    {
                    `
              ${
                        theme.palette.mode === 'light' ? "body{background:#EBE8E7!important} " : "body{background: #fff} "
                    }`
                }</style>


            </ThemeProvider>
        </ColorModeContext.Provider>

    )
}
