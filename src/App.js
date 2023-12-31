import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from '@mui/material'
import Login from "./Components/Login";
import ErrorPage from "./Pages/ErrorPage";
import './styles/quiz.css'
import './styles/CustomTextArea.css'

import Quiz from "./Components/QuizP1/Quiz";
import Page2 from "./Components/QuizP2/Page2";
import Page3 from "./Components/QuizP3/Page3";
import CreateSubject from "./Components/QuizP4/CreateSubject";
import Exam from "./Components/Exam/Exam";
import User from "./Components/UserComponent/User";
import UserProfile from "./Components/UserComponent/UserProfile/UserProfile";
import Menu from "./Components/QuizP1/Menu/Menu";
import CreateQuiz from "./Components/CreateQuiz/CreateQuiz";
import MainPageOfQuiz from "./Components/MainPageOfQuiz";
import UpdatePageOfQuiz from "./Components/UpdatePageOfQuiz";



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login /> } />
        {/* <Route path="/main" element={<Quiz />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<CreateSubject />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/user" element={<User />} />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="quiz" element={<CreateQuiz />} /> */}
          <Route path="/main" element={<MainPageOfQuiz />} ></Route>
        <Route path="/update/:quiz_id" element={<UpdatePageOfQuiz />} />
          

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
