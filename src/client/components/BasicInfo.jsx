import React, { useState } from 'react';
import {TextField, Container, Typography, Box, Button, Select, MenuItem, InputLabel, FormControl} from '@mui/material';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { border } from '@mui/system';

const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
const races =[]

const BasicInfo = () => {
    const [charClass, setCharClass] = useState('')
    const [classInfo, setClassInfo] = useState({})
    const [classLoading, setClassLoading] = useState(false)

    const client = new ApolloClient({
        uri: 'https://www.dnd5eapi.co/graphql',
        cache: new InMemoryCache(),
    });

    const classMenu = []
    classes.map(ele =>{
        classMenu.push(<MenuItem key={ele} value={ele}>{ele}</MenuItem>)
    })
    
    const handleClassChange = (event) => {
        const className = event.target.value
        console.log(className)
        setClassLoading(true)
        handleClassQuery(className)
        setCharClass(className)
    }
    const handleClassQuery = (className) => {
        console.log(className)
        client
            .query({
                query: gql`
                query GetClasses {
                    classes(name: "${className}") {
                      name
                      hit_die
                      subclasses {
                          desc
                          subclass_flavor
                      }
                    }
                  }
                `,
            })
            .then((result) => {
                const res = result.data.classes[0]
                console.log(res)
                setClassInfo({
                    name: res.name,
                    hit_die: res.hit_die,
                    subClass: res.subclasses[0].subclass_flavor,
                    subDesc: res.subclasses[0].desc
                })
                setClassLoading(false)
            });      
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
            <Box 
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    padding: '1em',
                    gap: '1em'
                }}
            >
                <TextField
                    required
                    fullWidth
                    id="playerName"
                    label="Player Name"
                    name="playerName"
                    autoComplete="playerName"
                    autoFocus
                />
                <TextField
                    required
                    fullWidth
                    id="characterName"
                    label="Character Name"
                    name="characterName"
                    autoComplete="characterName"
                    autoFocus
                />
                <TextField
                    required
                    fullWidth
                    id="background"
                    label="Background"
                    name="background"
                    autoComplete="background"
                    autoFocus
                />
                <TextField
                    required
                    fullWidth
                    id="alignment"
                    label="Alignment"
                    name="alignment"
                    autoComplete="alignment"
                    autoFocus
                />
                <TextField
                    required
                    fullWidth
                    id='level'
                    label='Level'
                    name='level'
                    autoComplete='level'
                    autoFocus
                />
                <FormControl>
                    <InputLabel  required id='class-select-label'>Class</InputLabel>
                    <Select
                        fullWidth
                        labelId='class-select-label'
                        id='charClass'
                        value={charClass}
                        label='charClass'
                        onChange={handleClassChange}
                    >
                        {classMenu}
                    </Select>      
                    <Container sx={{
                        marginTop: '1em',
                        border: 'solid',
                        borderWidth: 1,
                        borderColor: 'black'
                        }}
                    >
                        {(charClass == '') ? <Typography>Class Info from DnD API</Typography> : 
                        (classLoading) ? <Typography>Waiting on class info from API...</Typography> : 
                        <>
                            <Typography>Selected Class: {classInfo.name}</Typography>
                            <Typography>Subclass: {classInfo.subClass}</Typography>
                            <Typography>Description: {classInfo.subDesc}</Typography>
                            <Typography>Hit Dice: {classInfo.hit_die}</Typography>
                        </>}
                    </Container>                      
                </FormControl>
          
            </Box>

        </Container>
    );
};

export default BasicInfo;
