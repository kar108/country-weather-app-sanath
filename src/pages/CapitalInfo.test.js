import {API} from "./CapitalInfo";
import RegionalInfo from "../components/RegionalInfo";
import { render } from "@testing-library/react";
import CountryInfo from "../components/CountryInfo";




const capitalData={
  current:{temperature:25,weather_icons: ['https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0006_mist.png'],wind_speed: 7},
  location:{timezone_id: "Asia/Kolkata"}};


const data={population: 1380004385,
  capitalInfo: {latlng:[28.6, 77.2]},
  flags: {png: 'https://flagcdn.com/w320/in.png', svg: 'https://flagcdn.com/in.svg'},
  capital: ['New Delhi']};


describe("unit testing basics", () => {  
    test("verifying weather api", () => {
      expect(API).toBe("http://api.weatherstack.com/current?access_key=6f7e1776d7c43e66cc2bf55e4c86eb37&query=");
    });
  });



  describe("test RegionalInfo component", () => {
    test("render RegionalInfo component", () => {
      render(<RegionalInfo info={capitalData} />);
    });
  });


