import React from "react";

const createElement = ({ type, prps }, onChange) => {
  console.log("onChange", onChange);
  switch (type) {
    case "text":
      return (
        <input
          type="text"
          placeholder={prps.plchldr}
          onChange={e => onChange(e.target.value)}
        />
      );
    case "radio":
      return (
        <div>
          {prps &&
            prps.itms &&
            prps.itms.map((itm, idx) => (
              <React.Fragment>
                <input
                  type="radio"
                  id={itm.val + idx}
                  name={prps.nm}
                  value={itm.val}
                  onChange={e => onChange(e.target.value)}
                />
                <label for={itm.val + idx}>{itm.lbl}</label>
              </React.Fragment>
            ))}
        </div>
      );
  }
};

const CustomFormItem = ({ formItem, onChange }) => {
  const element = createElement(formItem, onChange);
  return (
    <div>
      <h4>{formItem && formItem.prps.hdr}</h4>
      <h6>{formItem && formItem.prps.sbHdr}</h6>
      {element}
    </div>
  );
};

export default CustomFormItem;
