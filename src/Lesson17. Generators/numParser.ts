const numChars: any = {};

for (let i = 0; i < 10; i++) {
  numChars[i] = i;
}

function numParser(str: string): number {
  if (/\D/.test(str)) {
    return NaN;
  }

  const chars = str.split('').reverse();

  let num = 0;

  for (let i = 0; i < chars.length; i++) {
    num += numChars[chars[i]] * 10 ** i;
  }

  return num;
}

console.log(numParser('1991'));
