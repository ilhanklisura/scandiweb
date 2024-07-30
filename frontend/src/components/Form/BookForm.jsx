import React from "react";
import FormInput from "./FormInput";

const BookForm = ({ register, errors }) => {
   return (
      <div id="Book">
         <FormInput
            id="weight"
            type="number"
            label="Weight (KG)"
            step="0.001"
            register={register}
            errors={errors}
         />
         <p className="fw-bold small m-0 mb-2">
            Please, provide the Book's weight in kilogram.
         </p>
      </div>
   );
};

export default BookForm;
