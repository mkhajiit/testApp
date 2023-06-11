import Home from "./routes/Home"
import Detail from "./components/Detail"

import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail/>}></Route>
      <Route path={process.env.PUBLIC_URL +"/"} element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;