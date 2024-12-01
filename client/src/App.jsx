import {BrowserRouter, Route, Routes} from "react-router-dom"
import Youtube from "./pages/Youtube"

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Youtube/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
