import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import LLLP from './pages/LLLP'
import LLLP1 from './pages/LLLP1'
import LLLP2 from './pages/LLLP2'
import LLLP3 from './pages/LLLP3'
import LLLP4 from './pages/LLLP4'
import LLLP5 from './pages/LLLP5'
import Presentations from './pages/Presentations'
import Presentation1 from './pages/Presentation1'
import Presentation2 from './pages/Presentation2'
import Posters from './pages/Posters'
import Poster1 from './pages/Poster1'
import Poster2 from './pages/Poster2'
import DataProjects from './pages/DataProjects'
import DataProject1 from './pages/DataProject1'
import DataProject2 from './pages/DataProject2'

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />

      <Route path="/lllp" element={<LLLP />} />
      <Route path="/lllp/1" element={<LLLP1 />} />
      <Route path="/lllp/2" element={<LLLP2 />} />
      <Route path="/lllp/3" element={<LLLP3 />} />
      <Route path="/lllp/4" element={<LLLP4 />} />
      <Route path="/lllp/5" element={<LLLP5 />} />

      <Route path="/presentations" element={<Presentations />} />
      <Route path="/presentations/1" element={<Presentation1 />} />
      <Route path="/presentations/2" element={<Presentation2 />} />

      <Route path="/posters" element={<Posters />} />
      <Route path="/posters/1" element={<Poster1 />} />
      <Route path="/posters/2" element={<Poster2 />} />

      <Route path="/data-projects" element={<DataProjects />} />
      <Route path="/data-projects/1" element={<DataProject1 />} />
      <Route path="/data-projects/2" element={<DataProject2 />} />
    </Routes>
  )
}