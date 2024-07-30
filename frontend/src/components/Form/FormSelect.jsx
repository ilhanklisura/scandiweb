import React from "react";

const FormSelect = ({ id, label, options, eventHandler, register, errors }) => {
   return (
      <div className="form-group">
         <label htmlFor={id} className="form-label">
            {label}
         </label>
         {errors[id] && (
            <p className="text-danger small mb-0">*{errors[id].message}</p>
         )}
         <select
            {...register(id, { required: `${label} is required` })}
            id={id}
            onChange={eventHandler}
            className="form-select form-select-sm"
         >
            <option value="">{label}</option>
            {options.map((value, index) => {
               return (
                  <option key={index} value={value}>
                     {value}
                  </option>
               );
            })}
         </select>
      </div>
   );
};

export default FormSelect;
