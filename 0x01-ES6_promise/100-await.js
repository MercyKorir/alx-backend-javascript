import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploadRes = await uploadPhoto();
    const userRes = await createUser();
    return {
      photo: uploadRes,
      user: userRes,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
