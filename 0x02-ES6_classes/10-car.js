export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const newSymbol = Symbol('newInstance');
    this[newSymbol] = new Car(this._brand, this._color, this._motor);
    return this[newSymbol];
  }
}
