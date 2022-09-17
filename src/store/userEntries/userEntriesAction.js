import { types } from "../types";
export const setCapital = (value) => {
  return {
    type: types.CAPITAL,
    payload: value,
  };
};
export const setInstallment = (value) => {
  return {
    type: types.INSTALLMENT,
    payload: value,
  };
};
export const setProfitRate = (value) => {
  return {
    type: types.PROFIT_RATE,
    payload: value,
  };
};
export const setInstallmentInterval = (value) => {
  return {
    type: types.INSTALLMENT_INTERVAL,
    payload: value,
  };
};
export const setTaxRate = (value) => {
  return {
    type: types.TAX_RATE,
    payload: value,
  };
};
