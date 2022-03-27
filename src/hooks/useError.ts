import { useState } from "react";

interface IErrors {
  fieldName: string;
  message: string;
}

export function useError() {
  const [errors, setErrors] = useState<IErrors[]>([]);

  function setError({ fieldName, message }: IErrors) {
    const errorAlreadyExists = errors.find(
      (error) => error.fieldName === fieldName
    );

    if (errorAlreadyExists) return;

    setErrors((prevState) => [...prevState, { fieldName, message }]);
  }

  function removeError(fieldName: string) {
    setErrors((prevState) =>
      prevState.filter((error) => error.fieldName !== fieldName)
    );
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find((error) => error.fieldName === fieldName)?.message;
  }

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
