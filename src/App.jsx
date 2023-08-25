import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import QuestionarePage from "./pages/QuestionarePage/QuestionarePage";

function App() {
  const [showQuestionare, setShowQuestionare] = useState(true); 
  const handleQuestionareComplete = () => {
    setShowQuestionare(false); // Set showQuestionare to false to transition to the next component/page
  };
  return (
    <div className="App">

      {/* <Navbar /> */}


      <Routes>
        <Route path="/" element={<HomePage />} />
<Route path="/questionare" element={<QuestionarePage onQuestionareComplete={handleQuestionareComplete} />} />
     
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
