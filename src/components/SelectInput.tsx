import React from "react";
import { Select, Text } from "@chakra-ui/react";
type Props = {};

function SelectInput({}: Props) {
  return (
    <>
      <Text>開始</Text>
      <SelectElm />
      <Text>終了</Text>
      <SelectElm />
    </>
  );
}

export default SelectInput;

const SelectElm = () => {
  return (
    <Select placeholder="Select option">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
};
