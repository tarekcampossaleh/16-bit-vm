const createMemory = (sizesInBytes) => {
  const ab = new ArrayBuffer(sizesInBytes);
  const dv = new DataView(ab);
  return dv;
};

module.exports = createMemory;
