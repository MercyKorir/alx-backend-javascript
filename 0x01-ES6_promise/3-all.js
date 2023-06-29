import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadPhotoPromise = uploadPhoto();
  const createUserPromise = createUser();
  let text = '';
  let arr = [];

  Promise.all([uploadPhotoPromise, createUserPromise])
    .then((values) => {
      const val = values.map(Object.values);
      arr = val[0].concat(val[1]);
      text = arr.slice(1).join(' ');
      console.log(text);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
