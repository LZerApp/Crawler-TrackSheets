const flattenArray = (values) => {
  const result = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
      result.push(values[i][j]);
    }
  }
  
  return result;
}
