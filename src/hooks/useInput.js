import { useState } from "react";

const useInput = (validate) => {
  const [inputValue, setInputValue] = useState("");
  const [inputWasTouched, setInputWasTouched] = useState(false);

  let inputIsValid = validate(inputValue);
  let inputIsInvalid = !inputIsValid && inputWasTouched;
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const inputBlurHandler = () => {
    setInputWasTouched(true);
  };
  const reset = ()=> {
    setInputValue('');
    setInputWasTouched(false);
  }

  return {
    inputValue,
    inputIsValid,
    inputIsInvalid,
    inputWasTouched,
    inputChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
