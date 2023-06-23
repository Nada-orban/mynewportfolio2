import {createContext, useState, useMemo} from "react";
import {createTheme} from '@mui/material/styles';
import {
    lightGreen,
    green,
    brown,
    grey,
    lime,
    red,
    blue
} from '@mui/material/colors';
import {fontSize} from "@mui/system";

export const themeSettongs = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                primary: {
                    main: grey[800]
                },
                secondary: { // main: red[400],
                    main: "#dc965a"
                },
                neutral: {

                    green: green[400],
                    red: red[500],
                    blue: blue[900],
                    white: "#fff",
                    skill: "black"
                },
                background: {
                    main: "#fff",
                    secondary: "#fff5ec"
                    // main: "rgb(52, 71, 103)",
                },
                text: {
                    primary: 'black',
                    secondary: grey[500]
                }


            } : {
                primary: {
                    main: "#E5657B"
                },
                secondary: {
                    main: "#E5657B",
                    yellow: "#E7BA66",
                    pink: "#E5657B"
                    // #D3817A
                    // main: "#25C37D",
                    // main: "#0DD1CF"
                },
                neutral: {
                    purple: "#A378DF",
                    lightpurple: "#C6A4EF",
                    mediumpurple: "#7976B7",
                    lightpink: "#D18DE0"
                },
                background: {
                    main: "#EBE8E7",
                    secondary: "#FCC101"

                    // main: "#7A5CE0",#29654D,
                    // secondary: "#164038"#FAF3E8


                },
                text: {
                    primary: " #FFFFFF",
                    secondary: "#F7AE9D"
                }

            })

        },
        typography: {
            fontFamily: ['Josefin Sans', 'sans - serif'].join(", "),
            fontSize: 13

        }

    }
};


export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("light");
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => (prev === "light" ? "dark" : "light"))
        }
    }), []);
    const theme = useMemo(() => createTheme(themeSettongs(mode)), [mode]);
    return [theme, colorMode];
};
