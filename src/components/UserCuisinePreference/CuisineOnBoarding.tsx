import { Box, Chip, Icon, Stack, Typography } from "@mui/material";
import { useState } from "react";

interface CuisineOnboardingProps {
    onSelect: (area: string) => void;
}

interface Cuisine { label: string, area: string };

export default function CuisineOnboarding(props : CuisineOnboardingProps) {

    const [selectedCuisine, setSelectCuisine] = useState<Cuisine | null>(null);

    const CUISINES: Cuisine[] = [
        { label: 'Pakistani',  area: 'Pakistani' },
        { label: 'Indian',  area: 'Indian' },
        { label: 'Italian',  area: 'Italian' },
        { label: 'Japanese', area: 'Japanese' },
        { label: 'Mexican',  area: 'Mexican' },
        { label: 'Chinese',  area: 'Chinese' },
        { label: 'Thai',  area: 'Thai' },
        { label: 'French', area: 'French' },
        { label: 'British', area: 'British' },
    ];
    return (


        <Box
            sx={{
                minHeight: '100dvh',
                bgcolor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3,
            }}>

            <Box sx={{ height: '20dvh' }}>

                <Typography variant="h3">
                    What cuisine are you in the mood for?
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                    Pick one to start — change it any time from the home page.
                </Typography>
            </Box>
            <Box sx={{ height: '80dvh' }}>
                <Stack spacing={2} direction={"row"}>
                    {
                        CUISINES.map((c: Cuisine) => {

                            return (
                                <Chip
                                    key={c.area}
                                    label={c.label}
                                    icon={<Icon>add</Icon>}
                                    color="primary"
                                     onClick={() => handleClick(c)} 
                                    variant={selectedCuisine?.area == c.area ? 'filled' : 'outlined'}>
                                </Chip>
                            );
                        })
                    }
                </Stack>
            </Box>
        </Box>
    );


    function handleClick(c: Cuisine){

        setSelectCuisine(c);
        props.onSelect(c.area);
        
    }
}