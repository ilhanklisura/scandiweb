import Product from "./Product";

export default class Furniture extends Product {
  constructor(sku, name, price, dimensions) {
    super(sku, name, price);
    this._dimensions = dimensions;
  }

  get attributeName() {
    return "Furniture";
  }

  get attributeValue() {
    return this._dimensions;
  }

  set attributeValue(dimensions) {
    this._dimensions = dimensions;
  }
}
