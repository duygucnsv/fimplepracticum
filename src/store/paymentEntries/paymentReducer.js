import { types } from "../types";
import { paymentInitialState } from "./paymentInitialState";

export const paymentReducer = (state = paymentInitialState, action) => {
  if (action.type === types.GET_PAYMENT) {
    return {
      ...state,
      totalPayment: action.payload.totalPayment.toFixed(2),
      monthlyPayment: action.payload.monthlyPayment.toFixed(2),
      totalTaxAmount: action.payload.totalFee.toFixed(2),
      paymentTable: action.payload.result,
    };
  }
};
