export const calculatePayments = (capital, rate, installment, intervalText) => {
  const interval =
    intervalText === "Monthly" ? 30 : intervalText === "Weekly" ? 7 : 365;
  const KKDFRate = 0.15;
  const BSMVRate = 0.1;
  const ratePercent = rate / 100;

  const rateWithTax = ratePercent * (1 + KKDFRate + BSMVRate);
  const calculatedRateByInterval = (rateWithTax * interval) / 30;

  const monthlyPayment =
    capital *
    ((calculatedRateByInterval *
      Math.pow(1 + calculatedRateByInterval, installment)) /
      (Math.pow(1 + calculatedRateByInterval, installment) - 1));

  const result = [];

  let remainingCapital = capital;
  for (let i = 0; i < installment; i++) {
    const calculatedRate = (remainingCapital * ratePercent * interval) / 30;
    const KKDF = calculatedRate * KKDFRate;
    const BSMV = calculatedRate * BSMVRate;

    const totalFee = calculatedRate + KKDF + BSMV;

    const paidCapital = monthlyPayment - totalFee;
    remainingCapital = remainingCapital - paidCapital;

    const payment = {
      paymentNo: i + 1,
      monthlyPayment: monthlyPayment.toFixed(2),
      capital: remainingCapital.toFixed(2),
      remainingCapital: remainingCapital.toFixed(2),
      rate: calculatedRate.toFixed(2),
      KKDF: KKDF.toFixed(2),
      BSMV: BSMV.toFixed(2),
    };
    result.push(payment);
  }
  return {
    result,
    totalPayment: monthlyPayment * installment,
    monthlyPayment,
    totalFee: monthlyPayment * installment - capital,
  };
};
