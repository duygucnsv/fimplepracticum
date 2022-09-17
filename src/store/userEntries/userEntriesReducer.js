import { types } from "../types";
import { userEntriesInitialState } from "./userEntriesInitialState";

export const userEntriesReducer = (state = userEntriesInitialState, action) => {
  if (action.type === types.CAPITAL) {
    return {
      ...state,
      capital: action.payload,
    };
  }
  if (action.type === types.INSTALLMENT) {
    return {
      ...state,
      installment: action.payload,
    };
  }
  if (action.type === types.PROFIT_RATE) {
    return {
      ...state,
      profitRate: action.payload,
    };
  }
  if (action.type === types.INSTALLMENT_INTERVAL) {
    return {
      ...state,
      installmentInterval: action.payload,
    };
  }
  if (action.type === types.TAX_RATE) {
    return {
      ...state,
      taxRate: action.payload,
    };
  }
};
