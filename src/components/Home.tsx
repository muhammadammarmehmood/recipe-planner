import { Box } from "@mui/material";
import { Navbar } from "./Navbar/Navbar";
import { Recipes } from "./Recipes/Recipes";


export function Home() {
    return (
        <>
            <Navbar></Navbar>
            <Box>
                <Recipes></Recipes>
            </Box>
        </>
    )
}