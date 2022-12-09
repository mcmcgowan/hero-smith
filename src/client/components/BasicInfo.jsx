import React, { useState } from 'react';
import {TextField, Container, Typography, Box, Button, Select, MenuItem, InputLabel, FormControl} from '@mui/material';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
const races =['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human', 'Tiefling']

const BasicInfo = () => {
    const [charClass, setCharClass] = useState('');
    const [classInfo, setClassInfo] = useState({});
    const [classLoading, setClassLoading] = useState(false);
    
    const [charRace, setCharRace] = useState('');
    const [raceInfo, setRaceInfo] = useState({});
    const [raceLoading, setRaceLoading] = useState(false);

    const client = new ApolloClient({
        uri: 'https://www.dnd5eapi.co/graphql',
        cache: new InMemoryCache(),
    });

    const classMenu = []
    classes.map(ele =>{
        classMenu.push(<MenuItem key={ele} value={ele}>{ele}</MenuItem>)
    })

    const raceMenu =[];
    races.map(ele => {
        raceMenu.push(<MenuItem key={ele} value={ele}>{ele}</MenuItem>)
    })

    const handleClassChange = (event) => {
        const className = event.target.value
        setClassLoading(true)
        handleClassQuery(className)
        setCharClass(className)
    }

    const handleRaceChange = (event) => {
        const raceName = event.target.value
        setRaceLoading(true)
        handleRaceQuery(raceName)
        setCharRace(raceName)
    }

    const handleClassQuery = (className) => {
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
                setClassInfo({//TODO: Should this go to store instead of local state?
                    name: res.name,
                    hit_die: res.hit_die,
                    subClass: res.subclasses[0].subclass_flavor,
                    subDesc: res.subclasses[0].desc
                })
                setClassLoading(false)
            });      
    }

    const handleRaceQuery = (raceName) => {
        client
            .query({
                query: gql`
                query GetRaces {
                    races(name: "${raceName}") {
                      name
                      ability_bonuses {
                          bonus
                          ability_score {
                              name
                          }
                      }
                    }
                  }
                `,
            })
            .then((result) => {
                const res = result.data.races[0]
                console.log(res)
                const bonuses = []
                res.ability_bonuses.map(ele => {
                    const bonusName = ele.ability_score.name
                    const bonusScore = ele.bonus
                    bonuses.push({[bonusName]: bonusScore})
                })
                const bonusComps=[]
                bonuses.map(ele => bonusComps.push(<Typography>{Object.keys(ele)[0]}: +{Object.values(ele)[0]}</Typography>))
                console.log(bonuses)
                setRaceInfo({//TODO: Should this go to store instead of local state?
                    name: res.name,
                    bonuses: bonusComps
                })
                setRaceLoading(false)
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
                    <Container sx={{ //TODO: this would probably be best as a drawer component?
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
                <FormControl>
                    <InputLabel  required id='race-select-label'>Race</InputLabel>
                    <Select
                        fullWidth
                        labelId='race-select-label'
                        id='charRace'
                        value={charRace}
                        label='charRace'
                        onChange={handleRaceChange}
                    >
                        {raceMenu}
                    </Select>      
                    <Container sx={{ //TODO: this would probably be best as a drawer component?
                        marginTop: '1em',
                        border: 'solid',
                        borderWidth: 1,
                        borderColor: 'black'
                        }}
                    >
                        {(charRace == '') ? <Typography>Race Info from DnD API</Typography> : 
                        (raceLoading) ? <Typography>Waiting on Race info from API...</Typography> : 
                        <>
                            <Typography>Selected Race: {raceInfo.name}</Typography>
                            <Typography>Ability Score Bonuses: {raceInfo.bonuses}</Typography>
                        </>}
                    </Container>                      
                </FormControl>
          
            </Box>

        </Container>
    );
};

export default BasicInfo;
