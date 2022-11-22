import React from 'react';
import {TextField, Container, Typography, Box, Button} from '@mui/material';

const BasicInfo = () => {

    return(
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            width: '400px',
            borderRadius: '5px',
        }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="playerName"
                label="Player Name"
                name="playerName"
                autoComplete="playerName"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="characterName"
                label="Character Name"
                name="characterName"
                autoComplete="characterName"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="background"
                label="Background"
                name="background"
                autoComplete="background"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="alignment"
                label="Alignment"
                name="alignment"
                autoComplete="alignment"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="level"
                label="Level"
                name="level"
                autoComplete="level"
                autoFocus
            />
        </Container>
    );
};

export default BasicInfo;
