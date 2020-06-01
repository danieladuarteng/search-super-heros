import React, { useState } from 'react'
import { actionGetHeros } from './actions'
import { useSelector, useDispatch } from 'react-redux'
import Search from './components/Search'
import Filter from './components/Filter'
import './App.css'

function App () {
  const { heros } = useSelector((state) => state.search)
  const [notFound, setNotFound] = useState(false)
  const dispatch = useDispatch()

  async function searchHeros (search) {
    const response = await actionGetHeros(search)
    console.log(response)
    if (response !== undefined) {
      dispatch(response)
      setNotFound(false)
    } else {
      setNotFound(true)
    }
  }

  return (
    <div className='App'>
      <Search searchHeros={searchHeros} />
      {notFound && <div>Not found heros, search again</div>}
      {!notFound && heros && heros.length !== 0 && <Filter />}
    </div>
  )
}

export default App
