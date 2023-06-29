export default function handleResponseFromAPI(promise) {
  const myPromise = new Promise((resolve, reject) => {
    if (promise) {
      console.log('Got a response from the API');
      resolve({ status: 200, body: 'success' });
    } else {
      console.log('Got a response from the API');
      reject(new Error());
    }
  });
  return myPromise;
}
