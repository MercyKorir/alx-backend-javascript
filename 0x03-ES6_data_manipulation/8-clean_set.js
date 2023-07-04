export default function cleanSet(set, startString) {
  let res = '';
  if (startString === '') return '';
  for (const element of set) {
    if (element.startsWith(startString)) {
      res += `-${element.slice(startString.length)}`;
    }
  }
  return res.slice(1);
}
