const calculatePriceWithFreeLimit = (totalGB, pricePerGb, freeGbLimit) => {
  if (freeGbLimit && totalGB <= freeGbLimit) return 0;
  return (totalGB - freeGbLimit) * pricePerGb;
};

const calculateProvidersPrices = (storageGB, transferGB, providers) => {
  const calculatedProvidersPrices = providers.reduce((prev, curr, idx, arr) => {
    const storagePrice = calculatePriceWithFreeLimit(
      storageGB,
      curr.storagePerGbPrice,
      curr.storageFreeGbLimit
    );
    const transferPrice = calculatePriceWithFreeLimit(
      transferGB,
      curr.transferPerGbPrice,
      curr.transferFreeGbLimit
    );
    const totalPrice = Number((storagePrice + transferPrice).toFixed(2));
    if (curr.minPay && totalPrice < curr.minPay) prev.push(curr.minPay);
    else if (curr.maxPay && totalPrice > curr.maxPay) prev.push(curr.maxPay);
    else prev.push(totalPrice);
    return prev;
  }, []);

  console.log(calculatedProvidersPrices);

  return calculatedProvidersPrices;
};

export default calculateProvidersPrices;
