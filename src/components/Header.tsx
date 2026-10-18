import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export function Header() {

    return(
        <AppBar component="header" position='static'>
            <Container maxWidth='lg'>
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            component={Link}
                            to="/"
                            sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 700 }}
                            >
                            🚗 CarShowroom
                        </Typography>
                        <Button
                            variant="contained"
                            size='small'
                            component={Link}
                            to="/vehicles/:vehicleId"
                            sx={{color: 'red'}}
                        >move</Button>
                        <Button 
                            size='small'
                            variant="contained"
                            component={Link}
                            to="/"
                            sx={{color: 'red'}}
                        >back</Button>
                    </Toolbar>
            </Container>
        </AppBar>
    );
};