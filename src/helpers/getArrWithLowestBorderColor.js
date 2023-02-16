const getArrWithLowestBorderColor = (colors, prices) => {
  const lowestNum = Math.min(...prices);
  const lowestIdx = prices.indexOf(lowestNum);
  return colors.map((color, idx) => {
    if (idx === lowestIdx) return color;
    return "rgb(125, 125, 125)";
  });
};

export default getArrWithLowestBorderColor;
