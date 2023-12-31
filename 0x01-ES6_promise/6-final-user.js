import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);
  return Promise.allSettled([signUpPromise, uploadPromise]).then((values) => {
    const res = values.map((val) => ({
      status: val.status,
      value: val.value || val.reason.toString(),
    }));
    return res;
  });
}
