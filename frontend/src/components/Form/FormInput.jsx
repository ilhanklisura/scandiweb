import React from "react";

const FormInput = ({ id, label, type, step, register, errors }) => {
   return (
      <div className="form-group">
         <label htmlFor={id} className="form-label">
            {label}
         </label>
         {errors[id] && (
            <p className="text-danger text-start small mb-0">
               *{errors[id].message}
            </p>
         )}
         <input
            {...register(id, { required: `${label} is required` })}
            type={type}
            id={id}
            step={step}
            className="form-input"
         />
      </div>
   );
};

export default FormInput;
