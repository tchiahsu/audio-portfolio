import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './sections/Home';
import Reel from './sections/Reel';
import ProjectRoute from "./sections/ProjectRoute";
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter basename="/audio-portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reel" element={<Reel />} />
          <Route path="/projects/:slug" element={<ProjectRoute />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
