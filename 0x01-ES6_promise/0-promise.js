export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    const data = 'Correct data';
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    }, 1000);
  });
  return myPromise;
}
