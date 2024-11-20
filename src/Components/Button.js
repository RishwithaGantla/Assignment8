import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, onClick, color = 'primary' }) => (
    <MuiButton variant="contained" color={color} onClick={onClick}>
        {children}
    </MuiButton>
);

export default Button;
