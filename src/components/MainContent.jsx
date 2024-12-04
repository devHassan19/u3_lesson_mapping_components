import Country from './Country'
const MainContent = ({ countries }) => {
  return (
    <div className="main">
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => (
          // <li key={country.id} className="country">
          //   <h3>Country: {country.name}</h3>
          //   <h5>Capital: {country.capital}</h5>
          // </li>
          <Country country={country} />
        ))}
      </ul>
    </div>
  )
}

export default MainContent
