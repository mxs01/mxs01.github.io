import { createTheme, Theme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

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

export const overridesTheme = (outerTheme: Theme) =>
  createTheme({
    palette: outerTheme.palette,
    typography: {
      h1: {
        fontFamily: "Outfit",
        fontWeight: "bold",
        [outerTheme.breakpoints.between("xs", "sm")]: {
          fontSize: "1.2rem",
        },
        [outerTheme.breakpoints.up("sm")]: {
          fontSize: "1.7rem",
        },
        [outerTheme.breakpoints.up("lg")]: {
          fontSize: "2.5rem",
        },
        [outerTheme.breakpoints.up("xl")]: {
          fontSize: "3.5rem",
        },
      },
      h3: {
        [outerTheme.breakpoints.between("xs", "sm")]: {
          fontSize: "1.2rem",
        },
        [outerTheme.breakpoints.up("sm")]: {
          fontSize: "1.5rem",
        },
        [outerTheme.breakpoints.up("lg")]: {
          fontSize: "1.8rem",
        },
        [outerTheme.breakpoints.up("xl")]: {
          fontSize: "2rem",
        },
      },
      h4: {
        [outerTheme.breakpoints.between("xs", "sm")]: {
          fontSize: "1rem",
        },
        [outerTheme.breakpoints.up("sm")]: {
          fontSize: "1.2rem",
        },
        [outerTheme.breakpoints.up("lg")]: {
          fontSize: "1.4rem",
        },
        [outerTheme.breakpoints.up("xl")]: {
          fontSize: "1.6rem",
        },
      },
      h5: {
        fontFamily: "Alpino",
        fontWeight: "400",
        fontSize: "1.2rem",
        [outerTheme.breakpoints.between("xs", "sm")]: {
          fontSize: "0.9rem",
        },
        [outerTheme.breakpoints.up("sm")]: {
          fontSize: "1.1rem",
        },
        [outerTheme.breakpoints.up("lg")]: {
          fontSize: "1.3rem",
        },
        [outerTheme.breakpoints.up("xl")]: {
          fontSize: "1.5rem",
        },
      },
      h6: {
        fontFamily: "Alpino",
        fontWeight: "400",
        fontSize: "1.2rem",
        [outerTheme.breakpoints.between("xs", "sm")]: {
          fontSize: "0.8rem",
        },
        [outerTheme.breakpoints.up("sm")]: {
          fontSize: "1rem",
        },
        [outerTheme.breakpoints.up("lg")]: {
          fontSize: "1.2rem",
        },
        [outerTheme.breakpoints.up("xl")]: {
          fontSize: "1.4rem",
        },
      },
      button: {
        letterSpacing: "0.2rem",
        [outerTheme.breakpoints.between("xs", "sm")]: {
          fontSize: "0.5rem",
        },
        [outerTheme.breakpoints.up("sm")]: {
          fontSize: "0.7rem",
        },
        [outerTheme.breakpoints.up("lg")]: {
          fontSize: "1.0rem",
        },
        [outerTheme.breakpoints.up("xl")]: {
          fontSize: "1.1rem",
        },
      },
      body1: {
        [outerTheme.breakpoints.between("xs", "sm")]: {
          fontSize: "0.6rem",
        },
        [outerTheme.breakpoints.up("sm")]: {
          fontSize: "0.8rem",
        },
        [outerTheme.breakpoints.up("lg")]: {
          fontSize: "1.0rem",
        },
        [outerTheme.breakpoints.up("xl")]: {
          fontSize: "1.1rem",
        },
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
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label": {
              color: "white",
            },
            "& label.Mui-focused": {
              color: "white",
            },
            
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            color: "white",
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
            [outerTheme.breakpoints.between("xs", "sm")]: {
              height: "2rem",
            },
            [outerTheme.breakpoints.up("sm")]: {
              fontSize: "0.8rem",
            },
            
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            color: "white",
            [outerTheme.breakpoints.between("xs", "sm")]: {
             
            },
            [outerTheme.breakpoints.up("sm")]: {
              fontSize: "0.8rem",
            },
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });
