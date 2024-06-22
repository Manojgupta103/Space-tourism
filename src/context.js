import { useReducer, createContext, useContext, useEffect } from "react";
import { reducer } from "./reducer";
import { TOGGLE_MOBILE_MENU, CLOSE_MOBILE_MENU, SPACE_INFO } from "./actions";

export const AppContext = createContext();

const initialState = {
  isMenuOpen: false,
  spaceInfo: {},
};

export const useGlobalState = () => {
  return useContext(AppContext);
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //  fetch data from endpoint
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        dispatch({ type: SPACE_INFO, payload: data });
      } catch (error) {
        console.log(error, "error loading data");
      }
    };

    fetchData();
  }, []);

  const toggleMenu = () => {
    dispatch({ type: TOGGLE_MOBILE_MENU });
  };

  const closeMobileMenu = () => {
    dispatch({ type: CLOSE_MOBILE_MENU });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleMenu, closeMobileMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;
