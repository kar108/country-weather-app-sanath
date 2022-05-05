import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';
import { useEffect,useState} from 'react';
import RegionalInfo from '../components/RegionalInfo';
import { Box, CircularProgress } from '@mui/material';

export const API="http://api.weatherstack.com/current?access_key=6f7e1776d7c43e66cc2bf55e4c86eb37&query=";


const CapitalInfo = () => {
    const capital: any = useLocation();

    const debouncedUrl = useDebounce(API+capital.state[0]);

    const [capitalData,setCapitalData]=useState(null);
  
    useEffect(() => {
      fetch(debouncedUrl)
        .then((response) => {
            return response.json();
        })
        .then((actualData) => setCapitalData(actualData))
        .catch((err) => {
          console.log(err.message);
        });
    },[debouncedUrl]);


    if(capitalData==null){
      return (
        <div style={{ display: "flex",justifyContent: "center",alignItems: "center",marginTop:"20rem",color:'white'}}>
          <CircularProgress color="inherit"/>
        </div>
        );
    }
    else{
      return(
        <RegionalInfo info={capitalData}/>
      );
    }
  
};

export default CapitalInfo;