import React from "react";
import FormInput from "./FormInput";

const DVDFrom = ({ register, errors }) => {
   return (
      <div id="DVD">
         <FormInput
            id="size"
            type="number"
            label="Size (MB)"
            step="0.001"
            register={register}
            errors={errors}
         />
         <p className="fw-bold small m-0 mb-2">
            Please, provide the DVD's size in megabyte.
         </p>
      </div>
   );
};

export default DVDFrom;
