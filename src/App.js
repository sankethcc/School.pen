import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import ErrorPage from "./Pages/ErrorPage";
import './styles/login.css'
import './styles/quiz.css'

import Quiz from "./Components/QuizP1/Quiz";
import Page2 from "./Components/QuizP2/Page2";
import Page3 from "./Components/QuizP3/Page3";
import CreateSubject from "./Components/QuizP4/CreateSubject";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="/main" element={<Quiz />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<CreateSubject />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
