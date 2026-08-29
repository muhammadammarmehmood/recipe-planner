import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette: {
        mode: "light",
        primary: { main: "#1565C0", light: "#1E88E5", dark: "#0D47A1", contrastText: "#FFFFFF" },
        secondary: { main: "#565F71", contrastText: "#FFFFFF" },
        error: { main: "#BA1A1A" },
        background: { default: "#FAFAFA", paper: "#FFFFFF" },
        text: { primary: "#1A1C1E", secondary: "#44474F", disabled: "#74777F" },
        divider: "#E2E8F0",
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
        h1: { fontFamily: "'Roboto Slab', serif", fontWeight: 700 },
        h2: { fontFamily: "'Roboto Slab', serif", fontWeight: 700 },
        h3: { fontFamily: "'Roboto Slab', serif", fontWeight: 600 },
        h4: { fontFamily: "'Roboto Slab', serif", fontWeight: 600 },
        h5: { fontFamily: "'Roboto Slab', serif", fontWeight: 600 },
        h6: { fontFamily: "'Roboto Slab', serif", fontWeight: 600 },
        button: { textTransform: "none", fontWeight: 500 },
    },
    shape: { borderRadius: 12 },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#FFFFFF",
                    color: "#1A1C1E",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                    borderBottom: "1px solid #E2E8F0",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: { backgroundImage: "none" },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 100,
                    boxShadow: "none",
                    "&:hover": { boxShadow: "none" },
                },
                containedPrimary: {
                    boxShadow: "0 2px 6px rgba(21,101,192,0.35)",
                    "&:hover": { boxShadow: "0 4px 12px rgba(21,101,192,0.40)" },
                },
            },
        },
    },
});

export default theme;