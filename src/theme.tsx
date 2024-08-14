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

