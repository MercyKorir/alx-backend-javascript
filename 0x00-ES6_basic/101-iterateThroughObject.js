export default function iterateThroughObject(reportWithIterator) {
  const arr = [...reportWithIterator];
  let res = '';
  let count = 1;
  for (const x of arr) {
    if (count < arr.length) {
      res += `${x} | `;
    } else {
      res += x;
    }
    count += 1;
  }
  return res;
}
