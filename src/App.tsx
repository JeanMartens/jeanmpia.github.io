import FiftyTwoWeeksOfCode from './pages/FiftyTwoWeeksOfCode'
import Menu from './pages/Menu'
import ProjectPage from './pages/ProjectPage'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/52-weeks-of-code" element={<FiftyTwoWeeksOfCode />} />
      <Route path="/52-weeks-of-code/projects/:projectSlug" element={<ProjectPage />} />
    </Routes>
  )
}

export default App