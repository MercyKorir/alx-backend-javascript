export default function createInt8TypedArray(length, position, value) {
  const newArrayBuffer = new ArrayBuffer(length);

  const Int8ArrayView = new Int8Array(newArrayBuffer);
  if (position < 0 || position >= Int8ArrayView.length) {
    throw new Error('Position outside range');
  }
  Int8ArrayView[position] = value;
  return newArrayBuffer;
}
