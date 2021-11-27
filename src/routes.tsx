import { Home } from 'pages/home'
import { Portfolio } from 'pages/portfolio'
import { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'

export const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='portfolio' element={<Portfolio />} />
    </Routes>
  )
}
