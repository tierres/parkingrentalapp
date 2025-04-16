import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}