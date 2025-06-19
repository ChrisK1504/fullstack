import { useEffect, useState } from "react";
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    console.log('using effect')
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        console.log(response)
        setCountries(response.data)
      })
  }, [])

  if (!countries) {
    return null
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const countriesToShow = countries.filter(c => c.name.common.toLowerCase().includes(filter) === true)

  return (
    <div>
      find countries <input value={filter} onChange={handleFilterChange} />
      <p>{countriesToShow.length > 10 ? 'Too many matches, specify another filter' : ''}</p>
      {countriesToShow.length < 10 ? countriesToShow.length === 1 ? <Country country={countriesToShow[0]} /> : countriesToShow.map(c => <li key={c['cca2']}>{c.name.common}</li>) : ''}
    </div>
  )

}


export default App