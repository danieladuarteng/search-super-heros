import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Hero from '../Hero'
import './Filter.css'

function Filter (props) {
  const { heros } = useSelector((state) => state.search)
  const [heroName, setHeroName] = useState(undefined)
  const [powerstatsName, setPowerstatsName] = useState(undefined)
  const [heroSelected, setHeroSelected] = useState([])

  useEffect(() => {
    setHeroSelected(heros)
  }, heros)

  function filterByPowerstats (value) {
    const separator = value.split('-')

    const type = separator[0]
    const power = separator[1]
    setPowerstatsName(power)

    let result = heros
    const greaterPower = heros.sort(
      (a, b) => b.powerstats[`${power}`] - a.powerstats[`${power}`]
    )[0]
    const lessPower = heros.sort(
      (a, b) => a.powerstats[`${power}`] - b.powerstats[`${power}`]
    )[0]

    if (type === 'greater') {
      result = greaterPower
    } else {
      result = lessPower
    }

    setHeroSelected([result])
  }

  function filterByName (name) {
    setHeroName(name)
    const herosFiltered = heros.filter((hero) => hero.name === name)
    setHeroSelected(herosFiltered)
  }

  const powerstats = [
    {
      label: 'Greater combat',
      type: 'greater-combat'
    },
    {
      label: 'Less combat',
      type: 'less-combat'
    },
    {
      label: 'Greater durability',
      type: 'greater-durability'
    },
    {
      label: 'Less durability',
      type: 'less-durability'
    },
    {
      label: 'Greater intelligence',
      type: 'greater-intelligence'
    },
    {
      label: 'Less intelligence',
      type: 'less-intelligence'
    },
    {
      label: 'Greater power',
      type: 'greater-power'
    },
    {
      label: 'Less power',
      type: 'less-power'
    },
    {
      label: 'Greater speed',
      type: 'greater-speed'
    },
    {
      label: 'Less speed',
      type: 'less-speed'
    },
    {
      label: 'Greater strength',
      type: 'greater-strength'
    },
    {
      label: 'Less strength',
      type: 'less-strength'
    }
  ]

  return (
    <div className='container'>
      <div className='filter'>
        <h2>Filter by</h2>
        <InputLabel id='filterByName'>Name</InputLabel>
        <Select
          value={heroName}
          onChange={(event) => filterByName(event.target.value)}
          displayEmpty
          fullWidth
          inputProps={{
            name: 'heroName',
            id: 'filterByName'
          }}
        >
          {heros.map((hero) => (
            <MenuItem key={hero.id} value={hero.name}>
              {hero.name}
            </MenuItem>
          ))}
        </Select>

        <InputLabel id='filterByPowerstat'>Powerstat</InputLabel>
        <Select
          value={powerstatsName}
          onChange={(event) => filterByPowerstats(event.target.value)}
          displayEmpty
          fullWidth
          inputProps={{
            name: 'powerstatsName',
            id: 'filterByPowerstat'
          }}
        >
          {powerstats.map((powerstat) => (
            <MenuItem key={powerstat.label} value={powerstat.type}>
              {powerstat.label}
            </MenuItem>
          ))}
        </Select>
      </div>
      {heroSelected && <Hero heros={heroSelected} />}
    </div>
  )
}

export default Filter
