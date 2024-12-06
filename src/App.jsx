import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"


function App() {

  return (
    <div className="w-[90%] m-auto">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

    </div>
  )
}

export default App
