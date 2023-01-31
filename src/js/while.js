const newArray = [];

const fillArray = () => {
  if (newArray.length > 8) return [...newArray, ...newArray];
  const random = Math.floor(Math.random() * 150 + 1);
  if (!newArray.includes(random)) newArray.push(random);
  return fillArray();
};

export { fillArray };
