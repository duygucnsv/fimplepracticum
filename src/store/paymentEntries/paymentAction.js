import { types } from "../types";
import { calculatePayments } from "../../helper/calculate";

export const calculate = (payload) => {
  const result = calculatePayments(
    payload.capital,
    payload.profitRate,
    payload.installment,
    payload.installmentInterval
  );
  return {
    type: types.GET_PAYMENT,
    payload: result,
  };
};
