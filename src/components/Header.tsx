import { AppBar, Toolbar, Typography, Container } from '@mui/material';
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
                    </Toolbar>
            </Container>
        </AppBar>
    );
};