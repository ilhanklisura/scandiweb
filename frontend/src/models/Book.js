import Product from "./Product";

export default class Book extends Product {
  constructor(sku, name, price, weight) {
    super(sku, name, price);
    this._weight = weight;
  }

  get attributeName() {
    return "Book";
  }

  get attributeValue() {
    return this._weight;
  }

  set attributeValue(weight) {
    this._weight = weight;
  }
}
