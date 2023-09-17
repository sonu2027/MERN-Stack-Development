import {Routes, Route } from "react-router-dom"
import ButtonOne from "./ButtonOne"
import ButtonTwo from "./ButtonTwo"
import ButtonThree from "./ButtonThree"
function App() {
  return (
    <Routes>
      <Route path="/" element={<ButtonOne />} />
      <Route path="/button2" element={<ButtonTwo />} />
      <Route path="/button2/button3" element={<ButtonThree />} />
    </Routes>
  )
}

export default App
