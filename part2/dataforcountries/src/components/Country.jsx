const Country = ({ country }) => {
  const languages = Object.values(country.languages)
  const flag = country.flags.png

  console.log(languages, country.flags.png);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital {country.capital.join(', ')}</p>
      <p>Area {country.area}</p>
      <h2>Languages</h2>
      <ul>
        {languages.map((language, i) => <li key={i}>{language}</li>)}
      </ul>

      < br />
      <img src={flag} />
    </div>
  )
}

export default Country