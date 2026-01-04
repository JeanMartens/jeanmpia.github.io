import FiftyTwoWeeksOfCode from './pages/FiftyTwoWeeksOfCode'
import Menu from './pages/Menu'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/52-weeks-of-code" element={<FiftyTwoWeeksOfCode />} />
    </Routes>
  )
}

export default App