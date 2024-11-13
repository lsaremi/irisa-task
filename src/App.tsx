import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentsList from "./pages/StudentsList";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studentsList" element={<StudentsList />} />
        <Route path="/student-register" element={<p>ddd</p>} />
      </Routes>
    </Router>
  );
}

export default App;
