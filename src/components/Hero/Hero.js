import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ButtonCustom from '../ButtonCustom'
import Modal from '../Modal'
import './Hero.css'

function Hero (props) {
  const [open, setOpen] = useState(false)
  const [heroSeleted, setHeroSeletec] = useState(null)
  const powerstats = [
    {
      label: 'Combat',
      color: 'red',
      value: 'combat'
    },
    {
      label: 'Durability',
      color: 'orangered',
      value: 'durability'
    },
    {
      label: 'Intelligence',
      color: 'orange',
      value: 'intelligence'
    },
    {
      label: 'Power',
      color: 'green',
      value: 'power'
    },
    {
      label: 'Speed',
      color: 'blue',
      value: 'speed'
    },
    {
      label: 'Strength',
      color: 'blueviolet',
      value: 'strength'
    }
  ]

  function handleOpen (hero) {
    setHeroSeletec(hero)
    setOpen(true)
  }

  function handleClose () {
    setOpen(false)
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            {props.heros &&
              props.heros.map((hero) => (
                <td key={hero.id}>
                  <img src={hero.image.url} alt='About hero' />
                  <p>
                    <strong>{hero.name}</strong>
                  </p>
                  <legend>Powerstats: </legend>

                  {powerstats.map((powerstat) => (
                    <div key={powerstat.label} className='powestats'>
                      <label>{powerstat.label}</label>
                      <div className='progress'>
                        <div
                          className={`progress-${powerstat.color}`}
                          style={{
                            width: `${
                              hero.powerstats[`${powerstat.value}`] === 'null'
                                ? 0
                                : hero.powerstats[`${powerstat.value}`]
                            }%`
                          }}
                        >
                          {hero.powerstats[`${powerstat.value}`] === 'null'
                            ? 0
                            : hero.powerstats[`${powerstat.value}`]}
                        </div>
                      </div>
                    </div>
                  ))}
                  <ButtonCustom
                    onClick={() => handleOpen(hero)}
                    type='submit'
                    variant='contained'
                    color='secondary'
                  >
                    See more details
                  </ButtonCustom>
                </td>
              ))}
          </tr>
        </tbody>
      </table>
      {heroSeleted && (
        <Modal hero={heroSeleted} open={open} handleClose={handleClose} />
      )}
    </>
  )
}

Hero.propTypes = {
  heros: PropTypes.array.isRequired
}

export default Hero
