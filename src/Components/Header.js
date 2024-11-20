import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
    <AppBar position="static" color="primary">
        <Toolbar>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                Hot Air Balloon App
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
