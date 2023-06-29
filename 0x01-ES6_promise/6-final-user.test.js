import handleProfileSignup from './6-final-user';
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

jest.mock('./4-user-promise');
jest.mock('./5-photo-reject');

describe('handleProfileSignup', () => {
  beforeEach(() => {
    signUpUser.mockClear();
    uploadPhoto.mockClear();
  });

  test('should resolve with the correct values when both promises are fulfilled', async () => {
    signUpUser.mockResolvedValueOnce({ firstName: 'Bob', lastName: 'Dylan' });
    uploadPhoto.mockResolvedValueOnce({ body: 'Success' });

    const result = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
    expect(result).toEqual([
      { status: 'fulfilled', value: { firstName: 'Bob', lastName: 'Dylan' } },
      { status: 'fulfilled', value: { body: 'Success' } },
    ]);
  });

  test('should resolve with the correct values when one promise is rejected', async () => {
    signUpUser.mockResolvedValueOnce({ firstName: 'Bob', lastName: 'Dylan' });
    uploadPhoto.mockRejectedValueOnce(new Error('Something went wrong!'));

    const result = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
    expect(result).toEqual([
      { status: 'fulfilled', value: { firstName: 'Bob', lastName: 'Dylan' } },
      { status: 'rejected', value: new Error('Something went wrong!') },
    ]);
  });
});
