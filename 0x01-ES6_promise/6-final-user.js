import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);
  const res = await Promise.allSettled([signUpPromise, uploadPromise]);
  return res.map((item) => ({
    status: item.status,
    value: item.value || item.reason,
  }));
}
