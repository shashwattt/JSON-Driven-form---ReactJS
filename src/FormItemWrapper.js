import React from "react";
import CustomFormItem from "./CustomFormItem";

const FormItemWrapper = ({ formItem, onChange, state }) => {
  let visibility = true;
  if (formItem.cndtn && formItem.cndtn.length > 0) {
    visibility = false;
    //Check if condition is true
    for (let cdn of formItem.cndtn) {
      if (cdn.val && state[cdn.name] == cdn.val) {
        visibility = true;
      } else if (!cdn.val && state[cdn.name]) {
        visibility = true;
        break;
      }
    }
  }
  return (
    visibility && (
      <React.Fragment>
        <CustomFormItem
          formItem={formItem}
          onChange={onChange(formItem.prps.nm)}
        />
        {formItem &&
          formItem.flwUp &&
          formItem.flwUp.map(itm => (
            <FormItemWrapper
              key={itm.key}
              formItem={itm}
              onChange={onChange}
              state={state}
            />
          ))}
      </React.Fragment>
    )
  );
};

export default FormItemWrapper;
