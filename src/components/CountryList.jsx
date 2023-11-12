/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import React from "react";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

export default function CountriesList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add Your First City By Clicking on a Country on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <div className={styles.countryList}>
      <ul>
        {countries.map((country) => (
          <CountryItem key={country.country} country={country} />
        ))}
      </ul>
    </div>
  );
}
