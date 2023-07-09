function numberRange(from: number, to: number): IterableIterator<number> {
  let current = from;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const res = {
        value: current,
        done: current >= to,
      };
      current++;

      return res;
    },
  };
}

console.log(Array.from(numberRange(2, 8)));
