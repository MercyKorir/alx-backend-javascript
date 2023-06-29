import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadPhotoPromise = uploadPhoto();
  const createUserPromise = createUser();

  return Promise.all([uploadPhotoPromise, createUserPromise])
    .then(([upload, user]) => {
      console.log(`${upload.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
