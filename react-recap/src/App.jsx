import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Quiz from "./pages/Quiz";
import FilterQuiz from "./pages/FilterQuiz";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import AdminsRoute from "./components/routes/AdminsRoute";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<WelcomePage/>} />
        <Route path="/filter" element={<FilterQuiz />}/>
        <Route path="/quiz" element= {<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminsRoute />}>
          <Route path="/admin/dashboard" element={<Admin />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
