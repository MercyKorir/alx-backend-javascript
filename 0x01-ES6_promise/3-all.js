import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadPhotoPromise = uploadPhoto();
  const createUserPromise = createUser();
  let text = '';
  let count = 0;

  Promise.all([uploadPhotoPromise, createUserPromise])
    .then((values) => {
      for (const val of values) {
        const objVal = Object.values(val);
        for (const x of objVal) {
          count += 1;
          if (x !== 200) {
            if (count !== 4) {
              text += `${x} `;
            } else {
              text += x;
            }
          }
        }
      }
      console.log(text);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
