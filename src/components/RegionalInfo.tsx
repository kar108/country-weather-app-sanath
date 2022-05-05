import React from 'react';

const RegionalInfo = ({info}:any) => {
    console.log(info);
    return (
        <div>
            <table>
            <thead>
                <tr>
                <th>Temperature</th>
                <th>WeatherIcon</th>
                <th>Windspeed</th>
                <th>Timezone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{info.current.temperature}</td>
                    <td><img src={info.current.weather_icons[0]} alt="wheather-icon"/></td>
                    <td>{info.current.wind_speed}</td>
                    <td>{info.location.timezone_id}</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default RegionalInfo;