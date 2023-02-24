import React from "react";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";

function reducer(state, action) {
  console.log(action, "action sendo disparada");
  switch (action.type) {
    case "change_current_page":
      return { currentPage: action.payload };
  }
}

const initialState = { currentPage: "login" };

function App() {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  const handleNavigate = (page) => {
    dispatch({ type: "change_current_page", payload: page });
  };

  console.log(globalState);

  return (
    <>
      {globalState.currentPage === "login" && (
        <Login onClickSelectButton={handleNavigate} />
      )}
      {globalState.currentPage === "home" && (
        <Home onClickLoginButton={handleNavigate} />
      )}
      {globalState.currentPage === "signup" && (
        <SignUp onClickLoginButton={handleNavigate} />
      )}
    </>
  );
}

export default App;
