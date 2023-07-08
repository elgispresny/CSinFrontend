import limitter from './limitter';

function randomGenerator(min: number, max: number): IterableIterator<number> {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next(): IteratorResult<number> {
      return {
        value: Math.floor(Math.random() * (max - min) + min),
        done: false,
      };
    },
  };
}

console.log(...limitter(randomGenerator(1, 100), 10));

export default randomGenerator;
