import { createTheme } from "@mui/material/styles";


const colorTheme = createTheme({
  palette: {
    primary: {
      dark: "#0D1321",
      light: "#748CAB",
      main: "#3E5C76",
    },
    secondary: {
      main: "#F0EBD8",
    },
  },
});

export const overridesTheme = createTheme({
  typography: {
    h1: {
      fontFamily:"Outfit",
      fontWeight: "bold",
      fontSize: "4.5rem"
    },
    h4: {
      fontSize: "1.3rem"
    },
    h6: {
      fontFamily: "Alpino",
      fontSize: "1.2rem",
      fontWeight: "400"
    }
  },
  components: {
    MuiButton: {
        styleOverrides:{
            root: {
                backgroundColor: colorTheme.palette.primary.main,
            },
        }
    },
    MuiGrid : {
      styleOverrides:{
        root: {
          height:"100%",
          padding:0,
          margin:0
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color:"black",
        }
      }
    }
  },
});

