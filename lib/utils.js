export const currencyFormatter = (amount) => {
  const formatter =Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return formatter.format(amount);
};

export default currencyFormatter
