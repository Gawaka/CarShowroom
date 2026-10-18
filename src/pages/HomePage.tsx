import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import { getVehicles } from '../api/vehiclesApi';
import { useQuery } from '@tanstack/react-query';
import { VehicleCard } from '../components/VehicleCard';

export function HomePage() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['vehicles'],
        queryFn: getVehicles,
    });

    const errorMessage = isError ? <Alert severity="error">Помилка завантаження автомобілів. Спробуйте оновити сторінку.</Alert> : null;
    const loadMessage = !isError && isLoading ? <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}><CircularProgress /></Box> : null;

    console.log(data);
    

    return(
        <Box>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: 24, md: 32 } }}>
                Каталог автомобілів
            </Typography>
            {errorMessage}
            {loadMessage}
            <Box
                component="section"
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                    },
                    gap: { xs: 2, md: 3 }
                }}
            >
                {data?.products.map((item)=> (
                    <VehicleCard key={item.id} vehicle={item}/>
                ))}
            </Box>
        </Box>
    );
};