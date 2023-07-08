/* eslint-disable @typescript-eslint/no-inferrable-types */
function limitter<T>(iter: Iterable<T>, limit: number): IterableIterator<T> {
  let total: number = 0;
  const cursor: Iterator<T, T, undefined> = iter[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next(): IteratorResult<T> {
      if (total >= limit) {
        return {
          value: undefined,
          done: true,
        };
      }
      total++;
      return cursor.next();
    },
  };
}

export default limitter;
