import Product from "./Product";

export default class DVD extends Product {
  constructor(sku, name, price, size) {
    super(sku, name, price);
    this._size = size;
  }

  get attributeName() {
    return "DVD";
  }

  get attributeValue() {
    return this._size;
  }

  set attributeValue(size) {
    this._size = size;
  }
}
