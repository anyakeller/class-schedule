import React, { createContext, useReducer, useContext } from "react";
import { useLocation } from "react-router-dom";
import { PageData } from "./PageData";

/* ------------------------- Store page by page info ------------------------ */

const PageDetailsContext = createContext();
const { Provider } = PageDetailsContext;

const reducer = (state, action) => {
  switch (action.type) {
    // set the current page data
    case "SET_CURRENT_PAGE":
      return Object.assign({}, state, {
        currentPage: PageData[action.currentPath]
      });

    default:
      return state;
  }
};

const PageDetailsProvider = ({ value = {}, ...props }) => {
  let location = useLocation();
  const [state, dispatch] = useReducer(reducer, {
    currentPage: {
      pathname: "",
      pageHeader: "",
      component: null
    },
    loading: false
  });

  // update the current page whenever it changes
  React.useEffect(() => {
    if (state.currentPage.pathname === location.pathname) return;
    dispatch({ type: "SET_CURRENT_PAGE", currentPath: location.pathname });
  }, [location, state.currentPage.pathname]);

  return <Provider value={[state, dispatch]} {...props} />;
};

const usePageDetailsContext = () => {
  return useContext(PageDetailsContext);
};

export { PageDetailsProvider, usePageDetailsContext };
