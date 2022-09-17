import React, { useReducer } from "react";

import { userEntriesReducer } from "./userEntries/userEntriesReducer";
import { userEntriesInitialState } from "./userEntries/userEntriesInitialState";
import { paymentReducer } from "./paymentEntries/paymentReducer";
import { paymentInitialState } from "./paymentEntries/paymentInitialState";

const Store = React.createContext();
Store.displayName = "Store";

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const [userEntriesState, dispatchUserEntries] = useReducer(
    userEntriesReducer,
    userEntriesInitialState
  );
  const [paymentState, dispatchPayment] = useReducer(
    paymentReducer,
    paymentInitialState
  );

  return (
    <Store.Provider
      value={{
        userEntriesState,
        dispatchUserEntries,
        paymentState,
        dispatchPayment,
      }}
    >
      {children}
    </Store.Provider>
  );
};
