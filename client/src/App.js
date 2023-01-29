import {BrowserRouter ,Routes,Route} from "react-router-dom"

import Home from "./screens/Home";
import Login from "./screens/Login";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login"  element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
