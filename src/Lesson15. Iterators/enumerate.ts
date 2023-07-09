function enumerate<T>(iter: Iterable<T>): IterableIterator<T> {
  const cursor = iter[Symbol.iterator]();
  let j = 0;

  return <any> {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const chunk = cursor.next();
      if (chunk.done) {
        return {
          done: true,
          value: undefined,
        };
      }
      j++;
      return {
        done: false,
        value: [j, chunk.value],
      };
    },
  };
}

console.log(...enumerate([1, 2, 3, 4, 5]));
