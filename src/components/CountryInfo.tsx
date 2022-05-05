import React from 'react';
import './CountryInfo.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CountryInfo = ({data:{population,capitalInfo,flags,capital}}:any) => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Population</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Flag</th>
              <th>Capital</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>{population}</td>
                <td>{capitalInfo["latlng"][0]}</td>
                <td>{capitalInfo["latlng"][1]}</td>
                <td><img src={flags["png"]} alt="flag" /></td>
                <td><Button component={Link} to="/CapitalInfo" state={capital} style={{marginTop:10 }} variant="contained" sx={{color:"white",backgroundColor:"black","&:hover": { backgroundColor: "#28282B"}}}>{capital}</Button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default CountryInfo;