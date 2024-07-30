import React from "react";

const ProductCard = ({ productData, setID, unsetID }) => {
   const typeMapper = {
      Book: (value) => `Weight: ${value} KG`,
      DVD: (value) => `Size: ${value} MB`,
      Furniture: (value) => `Dimensions: ${value}`,
   };
   const handleChecking = (event) => {
      event.target.checked ? setID(productData.id) : unsetID(productData.id);
   };

   return (
      <div className="card">
         <input
            type="checkbox"
            className="form-check-input delete-checkbox"
            onChange={handleChecking}
         />
         <div className="card-body">
            <h4 className="card-title">{productData.sku}</h4>
            <p>{productData.name}</p>
            <p>{productData.price} $</p>
            <p>
               {typeMapper[productData.attribute_name](
                  productData.attribute_value
               )}
            </p>
         </div>
      </div>
   );
};

export default ProductCard;
