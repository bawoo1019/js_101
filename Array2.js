let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
  let lengths = arr.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

console.log(oddLengths(arr));
