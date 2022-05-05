import React from 'react';
import { useLocation } from 'react-router-dom';
import CountryInfo from '../components/CountryInfo';

const CountryDetails = () => {
  const data: any = useLocation();
  console.log(data);
    return (
        <div>
          <CountryInfo data={data.state[0]}/>
        </div>
    );
};

export default CountryDetails;






