function algo(arr: string[]): string[][] {
  const hash: { [key: string]: string[] } = {};

  for (const x of arr) {
    const sortedX = x.split("").sort().join("");

    if (hash[sortedX]) {
      hash[sortedX].push(x);
    } else {
      hash[sortedX] = [x];
    }
  }

  return Object.values(hash);
}

const arr: string[] = ["ab", "cd", "ba", "dc", "diff"];

console.log(algo(arr));
