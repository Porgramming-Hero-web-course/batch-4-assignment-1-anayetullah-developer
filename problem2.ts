function removeDuplicates(arrOfNumber: number[]): number[] {
  let newArr: number[] = [];

  for (let i = 0; i < arrOfNumber.length; i++) {
    if (!newArr.includes(arrOfNumber[i])) {
      newArr.push(arrOfNumber[i]);
    }
  }

  return newArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
