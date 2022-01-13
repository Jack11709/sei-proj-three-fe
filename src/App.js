import React from 'react'
import { getPokemon } from './lib/api'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await getPokemon()
      console.log(res)
    }
    getData()
  })
  return <h1>Hello World</h1>
}

export default App
