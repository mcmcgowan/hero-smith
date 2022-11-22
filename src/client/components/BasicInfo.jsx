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
                id="alignment"
                label="alignment"
                name="alignment"
                autoComplete="alignment"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="level"
                label="level"
                name="level"
                autoComplete="level"
                autoFocus
            />
        </Container>
    );
};

export default BasicInfo;
