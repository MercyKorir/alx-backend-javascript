import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];
  const clss1 = new ClassRoom(19);
  arr.push(clss1);
  const clss2 = new ClassRoom(20);
  arr.push(clss2);
  const clss3 = new ClassRoom(34);
  arr.push(clss3);
  return arr;
}
