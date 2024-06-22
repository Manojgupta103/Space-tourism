import { TOGGLE_MOBILE_MENU, CLOSE_MOBILE_MENU, SPACE_INFO } from "./actions";

export const reducer = (state, action) => {
  // func
  const showOrHideMobileMenu = (task) => {
    return {
      ...state,
      isMenuOpen: task,
    };
  };

  if (action.type === TOGGLE_MOBILE_MENU) {
    return showOrHideMobileMenu(!state.isMenuOpen);
  }

  if (action.type === CLOSE_MOBILE_MENU) {
    return showOrHideMobileMenu(false);
  }

  if (action.type === SPACE_INFO) {
    return {
      ...state,
      spaceInfo: action.payload,
    };
  }

  return state;
};
