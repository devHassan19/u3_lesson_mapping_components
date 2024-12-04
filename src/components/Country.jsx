const Country = ({ country }) => {
  return (
    <li className="country" id={country.id}>
      <div className="country-info">
        <h3>{country.name}</h3>
        <h5>Capital: {country.capital}</h5>
        <h5>Population: {country.population}</h5>
      </div>
    </li>
  )
}

export default Country
