export default class Product {
  constructor(sku, name, price) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  get sku() {
    return this._sku;
  }

  set sku(sku) {
    this._sku = sku;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  get attributeName() {
    return null;
  }

  get attributeValue() {
    return null;
  }

  set attributeValue(value) {}
}
