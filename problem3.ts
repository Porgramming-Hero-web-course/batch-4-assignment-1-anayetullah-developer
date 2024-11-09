function countWordOccurrences(sentence: string, word: string): number {
  const arrayOfWords: string[] = sentence.split(" ");
  let count: number = 0;

  arrayOfWords.forEach((e: string) => {
    if (e === word) {
      count = count + 1;
    }
  });

  return count;
}

console.log(countWordOccurrences("I love typescript", "typescript"));
