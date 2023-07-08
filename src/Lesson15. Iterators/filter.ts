function filter<T>(iter: Iterable<T>, pred: (el: T) => boolean): IterableIterator<T> {
  const innerIter = iter[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let chunk = innerIter.next();

      // eslint-disable-next-line no-constant-condition
      while (true) {
        if (chunk.done || pred(chunk.value)) {
          return chunk;
        }

        chunk = innerIter.next();
      }
    },
  };
}

console.log(...filter([1, 2, 6, 4, 50], el => el > 5));
