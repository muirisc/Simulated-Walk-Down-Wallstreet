import { Route, BrowserRouter, Routes } from "react-router-dom";
import {useState, useEffect, Component} from "react";
import Login from './Components/LogIn'
// import './App.css';
import NavBar from "./Components/NavBar";
import MainPage from "./Components/MainPage";
import Interface1 from "./Components/Interface1";
import StockProfile from "./Components/StockProfile";
import AccountCreation from "./Components/CreateAccount";
import ExplanationPage from "./Components/ExplanationPage";
import News from "./Components/News";
import Quiz from "./Components/Quiz";

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);
  // if (!authenticated) {
  //   return <div></div>;
  // }

  return (
    
      <body>
        <main>
     <BrowserRouter >
     <NavBar currentUser={currentUser} authenticated={authenticated}/>
     <Routes>

       <Route path="/" element={<>   <MainPage currentUser={currentUser} authenticated={authenticated} />  </>} />
       <Route path="/stocks" element={<>   <StockProfile currentUser={currentUser} />  </>} />
       <Route path="/login" element={<>   <Login setCurrentUser={setCurrentUser}/>  </>} />
       <Route path="/createAccount" element={<>   <AccountCreation/>  </>} />
       <Route path="/ExplanationPage" element={<> <ExplanationPage/> </>} />
       <Route path="/news" element={<> <News/> </>} />
       <Route path="/quiz" element={<> <Quiz currentUser={currentUser}/> </>} />
</Routes>
  </BrowserRouter>
      </main>
      </body>
 
  );
}

export default App;
