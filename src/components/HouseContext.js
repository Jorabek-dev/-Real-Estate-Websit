import React, { useState, useEffect, createContext } from "react";

// import data
import { housesData } from "../data";

//  import context

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any )");
  const [countres, setCountres] = useState([]);
  const [property, setProperty] = useState("Propert type (any) ");
  const [properties, setPropertyes] = useState([]);
  const [price, setPrice] = useState("Prince range (any )");
  const [loading, setLoading] = useState(false);

  // return all contries
  useEffect(() => {
    const allCountruies = houses.map((house) => {
      return house.country;
    });

    // remove dublicaties
    const uniqueContext = ["Loaction (any)", ...new Set(allCountruies)];

    console.log(uniqueContext);
    // set countries state

    setCountres(uniqueContext);
  }, []);

  // return all proprty
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove dublicaties
    const uniqProperties = ["Loaction (any)", ...new Set(allProperties)];

    // console.log(allProperties)
    // set propertiyes state

    setPropertyes(uniqProperties);
  }, []);

  const handleclick = () => {
    // set loading
    setLoading(true);
    //  create function that cheacks if the string includes (any)

    const isDeafult = (str) => {
      return str.split("").includes("(any)");
    };
    // get first value of price and parce it to numbre
    console.log(parseInt(price.split("")[0]));
    // get second value of price which  is the maximum price & porce it  ot number
    const maxPrice = parseInt(price.split("")[2]);

    console.log(maxPrice);
    const newHouse = housesData.filter((houses) => {
      const housePrice = parseInt(houses.price);
      // if all value are selectted

      if (
        houses.country === country &&
        houses.type === property &&
        housePrice >= maxPrice &&
        housePrice <= maxPrice
      ) {
        return houses;
      }

      //  if all value are default
      if (isDeafult(country) && isDeafult(property) && isDeafult(price)) {
        return houses;
      }
      // if country is not  default
      if (!isDeafult(country) && isDeafult(property) && isDeafult(price)) {
        return houses.country === country;
      }
      // if propert is not default
      if (!isDeafult(property) && isDeafult(country) && isDeafult(price)) {
        return houses.type === property;
      }
      // if price is not default
      if (!isDeafult(price) && isDeafult(country) && isDeafult(property)) {
        if (housePrice >= maxPrice && housePrice <= maxPrice) {
          return houses;
        }
      }
      //  if country & property is not default
      if (!isDeafult(country) && isDeafult(property) && isDeafult(price)) {
        return houses.country === country && houses.type === property;
      }
      // if country and price is not default
      if (!isDeafult(country) && isDeafult(property) && !isDeafult(price)) {
        if (housePrice >= maxPrice && housePrice <= maxPrice) {
          return houses.country === country;
        }
      }
      // property and price is not default
      if (!isDeafult(country) && !isDeafult(property) && !isDeafult(price)) {
        if (housePrice >= maxPrice && housePrice <= maxPrice) {
          return houses.type === property;
        }
      }
    });
    setTimeout(() => {
      return newHouse.length < 1 ? setHouses([]) : setHouses(newHouse);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countres,
        property,
        setProperty,
        properties,
        price,
        houses,
        setPrice,
        loading,
        setLoading,
        handleclick,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
