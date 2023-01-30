import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import Landing from './pages/Landing/Landing'

import PuppyList from './pages/PuppyList/PuppyList'
import NewPuppy from './pages/NewPuppy/NewPuppy'

//Services
import * as puppyService from './services/puppyService'


const App = () => {

  const navigate = useNavigate()
  const [puppies, setPuppies] = useState([])

  const handleAddPuppy = async (data) => {
    const newPuppy = await puppyService.create(data)
    setPuppies([newPuppy, ...puppies])
    navigate('/puppies')
  }

  useEffect(() => {
    const fetchPuppies = async () => {
    const data = await puppyService.index()
    setPuppies(data)
  }
    fetchPuppies()
  }, [])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/puppies' element={
          <PuppyList
            puppies = {puppies}
            />
        } />
        <Route path='/puppies/new' element={
          <NewPuppy handleAddPuppy={handleAddPuppy} />
        } />
      </Routes>
    </>
  )
}

export default App