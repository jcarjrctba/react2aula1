import React from "react";
import { createContext } from "react";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { FeedPhoto } from "./pages/feedphoto";

function reducer(state, action) {
  console.log(action, "action sendo disparada");
  switch (action.type) {
    case "change_current_page":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "add_user":
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
        },
      };
    case "add_photos_user":
      return {
        ...state,
        user: {
          ...state.user,
          photos: action.payload,
        },
      };
    case "add_highlight_image":
      const currentImage = state.user.photos.find((img) => {
        return img.id === action.payload;
      });
      console.log(currentImage);
      return {
        ...state,
        user: {
          ...state.user,
          highlightImage: currentImage,
        },
      };
    default:
      return state;
  }
}

const initialState = {
  currentPage: "login",
  user: { username: "@adatech", photos: [], highlightImage: null },
};

export const InstaContext = createContext(initialState);

function App() {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  const handleNavigate = (page) => {
    dispatch({ type: "change_current_page", payload: page });
  };

  console.log(globalState);

  return (
    <InstaContext.Provider
      value={{ meuState: globalState, meuDispatch: dispatch }}
    >
      {globalState.currentPage === "login" && <Login />}
      {globalState.currentPage === "home" && <Home />}
      {globalState.currentPage === "signup" && <SignUp />}
      {globalState.currentPage === "feedphoto" && <FeedPhoto />}
    </InstaContext.Provider>
  );
}

export default App;
