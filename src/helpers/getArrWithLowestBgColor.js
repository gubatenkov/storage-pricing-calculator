const getArrWithLowestBgColor = (colors, prices) => {
  const lowestNum = Math.min(...prices);
  const lowestIdx = prices.indexOf(lowestNum);
  return colors.map((color, idx) => {
    if (idx === lowestIdx) return color;
    return "rgba(125, 125, 125, 0.5)";
  });
};

export default getArrWithLowestBgColor;
