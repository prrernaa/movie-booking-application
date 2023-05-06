import React ,
{useState, useEffect} from 'react'
import {AppBar, Autocomplete, Box, Tab, Tabs, TextField,  Toolbar} from '@mui/material'
//import TheaterComedyTwoToneIcon from '@mui/icons-material/TheaterComedyTwoTone';
import TheatersTwoToneIcon from '@mui/icons-material/TheatersTwoTone';
import { getAllMovie } from '../Api-helpers/api-helper';


const dummyArray= ["pathan", "selfiee", "Brahmastra", "chal jinde"]
const Header = () => {
  const [value, setValue]= useState(0);
  useEffect(() => {
    getAllMovie()
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err));
  }, []);
  
  return (
    <AppBar onScroll={{bgcolor:"#2b2d42"}}>
      <Toolbar>
        <Box width={'20%'}>
          <TheatersTwoToneIcon/>
        </Box>
        <Box width={'30%'} margin={"auto"}>
        <Autocomplete
          freeSolo
          options={dummyArray.map((option) => option)}
          renderInput={(params) =>(
           <TextField
           sx={{input: {color:"whitesmoke"}}}
            variant='standard' {...params} placeholder="Search Multiple Movies aacross " />
          )}
        />
        </Box>
        <Box display={'flex'}>
          <Tabs textColor='white' indicatorColor='secondary' value={value} >
          onChange={(e,val)=>setValue(val)}
            <Tab label="Movies"/>
            <Tab label="Auth"/>
            <Tab label="Admin"/>

          </Tabs>

        </Box>
      </Toolbar>        
    </AppBar>
  )
}

export default Header