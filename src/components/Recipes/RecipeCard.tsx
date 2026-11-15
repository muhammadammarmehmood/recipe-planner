import { Box, Card, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material";

export interface RecipeCardProps {
    name: string;
    image: string;
    cuisine: string;
}

export function RecipeCard(props: RecipeCardProps) {

    return <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Card variant="outlined" sx={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", "&:hover": { transform: "translateY(-4px)", boxShadow: 4, transition: "all 0.2s ease" }, transition: "all 0.2s ease" }}>
            <Box sx={{ position: "relative", height: 192, bgcolor: "grey.100" }}>
                <CardMedia
                    component="img"
                    sx={{ height: 192, objectFit: "cover" }}
                    image={props.image}
                    title={props.name}
                />
                <Chip
                    label={props.cuisine}
                    size="small"
                    sx={{
                        position: "absolute", bottom: 10, left: 10,
                        bgcolor: "#FEF2F2", color: "#B91C1C",
                        fontWeight: 600, fontSize: 11,
                        height: 24, border: "none",
                    }}
                />
            </Box>
            <CardContent sx={{ pb: 0 }}>
                <Box sx={{ m: 2 }}>
                    <Typography
                        variant="body1"
                        fontWeight={600}
                        sx={{ mb: 1.5, lineHeight: 1.3, "&:hover": { color: "primary.main" }, transition: "color 0.15s" }}
                        noWrap
                    >
                        {props.name}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    </Grid>



}