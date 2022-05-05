import React from 'react';
import { Button,TextField,Grid, Paper, styled, ButtonProps,} from '@mui/material';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';
import './CountryName.css';

export const title:string ="Country Details";

export const  API_ENDPOINT:string="https://restcountries.com/v3.1/name/";

export function CountryName() {

    const paperStyle={padding:40,height:'25vh',width:280,margin:"150px auto", borderRadius:10,backgroundColor:"var(--foregroundColor)"}

    const [searchText,setSearchText]=useState("");
    const [data,setData]=useState("[]");

    const debouncedUrl = useDebounce(API_ENDPOINT + searchText);

    const[state,setState]=useState(true)

    const handleChange =(e:any)=>{
        setSearchText(e.target.value);
       }

    useEffect(() => {
        fetch(debouncedUrl)
          .then((response) => {
            if (!response.ok) {
              setState(true)
            }
            else{
              setState(false);
              return response.json();
            }
          })
          .then((actualData) => setData(actualData))
          .catch((err) => {
            console.log(err.message);
          });
      },[debouncedUrl]);


  return (
    <div>
      <nav>
        <h1>{title}</h1>
      </nav>
        <Grid container>
            <Paper style={paperStyle} elevation={10}>
                <TextField onChange={handleChange}
                variant="outlined"  margin="dense" type="text" placeholder='Country Name' style={{marginTop:20}} 
                fullWidth required 
                value={searchText} 
                sx={{backgroundColor:"var(--backgroundColor)",input: { color: 'white' },borderRadius:"0.25rem"}} />
                  <Button disabled={state} component={Link} to="/CountryDetails" state={data} fullWidth style={{marginTop:10}} variant="contained"sx={{color:"white",backgroundColor:"var(--backgroundColor)","&:hover": { backgroundColor: "#002984" }}}>Search</Button>
            </Paper>
        </Grid>
    </div>
  );
}

export default CountryName;
