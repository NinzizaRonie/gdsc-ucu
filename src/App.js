import { Routes, Route } from "react-router-dom"
import Home from "./components/home"
import Login from "./components/login/login"
import Signup from "./components/signup/signup"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
      </Routes>

    </div>
  );
}
export default App;
