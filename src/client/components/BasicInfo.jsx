import React from 'react';
import {TextField, Container, Typography, Box, Button} from '@mui/material';

const BasicInfo = () => {

    return(
        <Container sx={{backgroundColor: 'white'}}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="playerName"
                label="playerName"
                name="playerName"
                autoComplete="playerName"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="characterName"
                label="characterName"
                name="characterName"
                autoComplete="characterName"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="background"
                label="background"
                name="background"
                autoComplete="background"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="playerName"
                label="playerName"
                name="playerName"
                autoComplete="playerName"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="playerName"
                label="playerName"
                name="playerName"
                autoComplete="playerName"
                autoFocus
            />
        </Container>
    );
};

export default BasicInfo;
