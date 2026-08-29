import { Box, Button, Toolbar, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { NavLink } from 'react-router-dom'
import AppIcon from '../AppIcon/AppIcon'
import { NAV_LINKS } from '../../Enums'

export function Navbar() {
    return (
        <>
            <AppBar position="static" className=''>
                <Toolbar sx={{ maxWidth: 1440, width: "100%", mx: "auto", px: { xs: 2, md: 4 }, gap: 2 }}>
                    <NavLink
                        style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }} to='/'>
                        <AppIcon size={36} />
                        <Typography
                            variant="h6"
                            sx={{ color: "primary.main", fontFamily: "'Roboto Slab', serif", fontWeight: 700, letterSpacing: "-0.5px" }}
                        >
                            RecipePal
                        </Typography>
                    </NavLink>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                        {NAV_LINKS.map(({ label, to }) =>
                            <NavLink key={to} to={to} style={{ textDecoration: 'none' }}>
                                <Button
                                    color="primary"
                                    disableElevation
                                    sx={{
                                        borderRadius: 100,
                                        px: 2,
                                        py: 0.75,
                                        fontSize: 14,
                                        fontWeight: 500,
                                        color: "text.secondary", "&:hover": { backgroundColor: "action.hover", color: "primary.main" }
                                    }}>
                                    {label}
                                </Button>
                            </NavLink>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}