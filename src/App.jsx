import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProfileMaker from './pages/ProfileMaker'

function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile-maker" element={<ProfileMaker />} />
  </Routes>
}

export default App

