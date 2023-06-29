import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw TypeError('amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw TypeError('currency must be an instance of Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('amount must be a number');
    }

    this._amount = amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError('currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency._name} (${this.currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw TypeError('amount and conversionRate must both be numbers');
    }
    return amount * conversionRate;
  }
}
