import taskBlock from './1-block-scoped';

describe('taskBlock', () => {
  test('returns [false, true] when called with false', () => {
    expect(taskBlock(false)).toEqual([false, true]);
  });
  test('returns [false, true] when called with true', () => {
    expect(taskBlock(true)).toEqual([false, true]);
  });
});
