import React from "react";
import { Select, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
type Props = {};

function SelectInput({}: Props) {
  return (
    <>
      <Text>開始</Text>
      <SelectElm name="select1" />
      <Text>終了</Text>
      <SelectElm name="select2" />
    </>
  );
}

export default SelectInput;

const SelectElm = ({ name }: { name: string }) => {
  const { register } = useFormContext();
  return (
    <Select placeholder="Select option" {...register(name)}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
};
