export default function returnHowManyArguments(...args) {
  let count = 0;
  args.forEach(() => {
    count += 1;
  });
  return count;
}
