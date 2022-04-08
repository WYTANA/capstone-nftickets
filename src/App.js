import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Events from "./pages/Events"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Abel */}
          <Route path="/" element={<Home />} />
          {/* Mike */}
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
