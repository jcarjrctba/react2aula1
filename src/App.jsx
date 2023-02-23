import React from "react";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";

function App() {
  const [currentPage, setCurrentPage] = React.useState("login");
  console.log(currentPage);
  return (
    <>
      {currentPage === "login" && (
        <Login onClickSelectButton={setCurrentPage} />
      )}
      {currentPage === "home" && <Home onClickLoginButton={setCurrentPage} />}
      {currentPage === "signup" && (
        <SignUp onClickLoginButton={setCurrentPage} />
      )}
    </>
  );
}

export default App;
