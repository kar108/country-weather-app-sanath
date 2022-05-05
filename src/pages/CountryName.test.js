import {title,API_ENDPOINT,TextField} from "./CountryName";
import { render } from "@testing-library/react";


describe("unit testing basics", () => {  
    test("checking title ", () => {
      expect(title).toBe("Country Details");
    });

    test("verifying api  ", () => {
        expect(API_ENDPOINT).toBe("https://restcountries.com/v3.1/name/");
      });

  });

  


