import { createTheme } from "@mui/material/styles";

export const colorTheme = createTheme({
  palette: {
    primary: {
      dark: "#254e73",
      light: "#748CAB",
      main: "#3E5C76",
    },
    secondary: {
      main: "#F0EBD8",
    },
  },
});

export const overridesTheme = createTheme({
  palette: {
    primary: {
      dark: "#254e73",
      light: "#748CAB",
      main: "#3E5C76",
    },
    secondary: {
      main: "#F0EBD8",
    },
  },
  typography: {
    h1: {
      fontFamily: "Outfit",
      fontWeight: "bold",
      fontSize: "3.5rem",
    },
    h4: {
      fontSize: "1.3rem",
    },
    h6: {
      fontFamily: "Alpino",
      fontSize: "1.2rem",
      fontWeight: "400",
    },
    button: {
      letterSpacing: "0.2rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: colorTheme.palette.primary.main,
          borderRadius: "10px",
          color: "white",
          padding: "1rem",
          "&:hover": {
            backgroundColor: colorTheme.palette.primary.dark,
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          height: "100%",
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "black",
        },
      },
    },
  },
});
