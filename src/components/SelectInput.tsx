import React from "react";
import { forwardRef, Select, SelectProps, Text } from "@chakra-ui/react";

type Props = {
  label: string;
};

const SelectInput = forwardRef<SelectProps & Props, "select">(
  ({ label, ...props }, ref) => {
    return (
      <>
        <Text>{label}</Text>
        <Select placeholder="Select option" ref={ref} {...props}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </>
    );
  }
);

export default SelectInput;
