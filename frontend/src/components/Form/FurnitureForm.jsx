import React from "react";
import FormInput from "./FormInput";

const FurnitureForm = ({ register, errors }) => {
   return (
      <div id="Furniture">
         <FormInput
            id="height"
            type="number"
            label="Height (CM)"
            step="0.001"
            register={register}
            errors={errors}
         />
         <FormInput
            id="width"
            type="number"
            label="Width (CM)"
            step="0.001"
            register={register}
            errors={errors}
         />
         <FormInput
            id="length"
            type="number"
            label="Length (CM)"
            step="0.001"
            register={register}
            errors={errors}
         />
         <p className="fw-bold small m-0 mb-2">
            Please, provide the Furniture's dimensions: height, width, and
            length in centimeters.
         </p>
      </div>
   );
};

export default FurnitureForm;
