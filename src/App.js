import React, { useState } from "react";
import response from "./response";
import FormItemWrapper from "./FormItemWrapper";
import "./style.css";

const App = () => {
  const [state, setState] = useState({});
  const handleSubmit = e => {
    console.log("handleSubmit- ", e);
  };

  const changeHandler = name => val => {
    const newStateVal = {};
    newStateVal[name] = val;
    setState({ ...state, ...newStateVal });
  };

  return (
    <div>
      <h1>JSON driven form</h1>
      <form onSubmit={handleSubmit}>
        {response.inputs.map(formitem => (
          <FormItemWrapper
            key={formitem.key}
            formItem={formitem}
            onChange={changeHandler}
            state={state}
          />
        ))}
        <input type="submit" value="Submit" />
      </form>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};

export default App;
