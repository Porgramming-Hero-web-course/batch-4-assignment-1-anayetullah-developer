function sumArray(arr: number[]) {
  const result = arr.reduce(
    (accumulator, currentValue): number =>
      accumulator + currentValue,
    0
  );
  return result;
}

console.log(sumArray([1, 2, 3, 4, 5]));
