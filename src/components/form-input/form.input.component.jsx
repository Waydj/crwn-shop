import React from "react";
import { FormInputLabel, Group, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps}></Input>
      {label && (
        <FormInputLabel shrink={otherProps.value.length} htmlFor={label}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
