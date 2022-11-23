import React, { useState } from 'react';
import {TextField, Container, Typography, Box, Button, Select, MenuItem, InputLabel, FormControl} from '@mui/material';

const BasicInfo = () => {
    const [charClass, setCharClass] = useState('')
    const handleClassChange = (event) => {
        console.log(event.target.value)
        setCharClass(event.target.value)
    }
    return(
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            width: '400px',
            borderRadius: '5px',
        }}>
            <Box component="form">
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
                    id='level'
                    label='Level'
                    name='level'
                    autoComplete='level'
                    autoFocus
                />
                <InputLabel id='charClassLabel'>Choose A Class:</InputLabel>
                <Select
                    fullWidth
                    labelId='charClassLabel'
                    id='charClass'
                    value={charClass}
                    label='charClass'
                    onChange={handleClassChange}
                >
                    <MenuItem value='barbarian'>Barbarian</MenuItem>
                    <MenuItem value='bard'>Bard</MenuItem>
                    <MenuItem value='cleric'>Cleric</MenuItem>
                    <MenuItem value='druid'>Druid</MenuItem>
                    <MenuItem value='fighter'>Fighter</MenuItem>
                    <MenuItem value='monk'>Monk</MenuItem>
                    <MenuItem value='paladin'>Paladin</MenuItem>
                    <MenuItem value='ranger'>Ranger</MenuItem>
                    <MenuItem value='rogue'>Rogue</MenuItem>
                    <MenuItem value='sorcerer'>Sorcerer</MenuItem>
                    <MenuItem value='warlock'>Warlock</MenuItem>
                    <MenuItem value='wizard'>Wizard</MenuItem>
                </Select>                    
            </Box>

        </Container>
    );
};

export default BasicInfo;
