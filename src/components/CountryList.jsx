import styles from "./CountryList.module.css";

import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  }

  const countries = cities.reduce((countriesArr, currCity) => {
    if (
      !countriesArr
        .map((countryIncluded) => countryIncluded.country)
        .includes(currCity.country)
    ) {
      return [
        ...countriesArr,
        { country: currCity.country, emoji: currCity.emoji },
      ];
    } else return countriesArr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
