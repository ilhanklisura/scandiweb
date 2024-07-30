import DVD from "./DVD";
import Book from "./Book";
import Furniture from "./Furniture";

export default class ProductFactory {

  static create(type, sku, name, price, attribute) {
    let product;

    switch (type) {
      case "DVD":
        product = new DVD(sku, name, price);
        product.attributeValue = attribute.size;
        break;
      case "Book":
        product = new Book(sku, name, price);
        product.attributeValue = attribute.weight;
        break;
      case "Furniture":
        product = new Furniture(sku, name, price);
        product.attributeValue = `${attribute.height}x${attribute.width}x${attribute.length}`;
        break;
      default:
        throw new Error("Invalid product type");
    }

    return product;
  }

  static requestData(product) {
    const data = new FormData();
    data.append("attribute_name", product.attributeName);
    data.append("sku", product.sku);
    data.append("name", product.name);
    data.append("price", product.price);
    data.append("attribute_value", product.attributeValue);

    return data;
  }
}
