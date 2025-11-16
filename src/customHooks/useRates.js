export const useRates = (rates) => {
  if (rates.monthly) {
    return `$${rates.monthly.toLocaleString()}/Monthly`;
  } else if (rates.weekly) {
    return `$${rates.weekly.toLocaleString()}/weekly`;
  } else if (rates.nightly) {
    return `$${rates.nightly.toLocaleString()}/Night`;
  }
};
