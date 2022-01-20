import React from "react";
import { userInitialState } from "./user/userInitialState";
import { userReducer } from "./user/userReducer";

const Store = React.createContext();

Store.displayName = "Store";

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const [userState, dispatchUser] = React.useReducer(
    userReducer,
    userInitialState
  );
  return (
    <Store.Provider value={{ userState, dispatchUser }}>
      {children}
    </Store.Provider>
  );
};
