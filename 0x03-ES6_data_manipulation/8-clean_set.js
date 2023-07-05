export default function cleanSet(set, startString) {
  let res = '';
  if (startString === '' || typeof startString !== 'string') return '';
  for (const element of set) {
    if (element !== undefined && element.startsWith(startString)) {
      res += `-${element.slice(startString.length)}`;
    }
  }
  return res.slice(1);
}
