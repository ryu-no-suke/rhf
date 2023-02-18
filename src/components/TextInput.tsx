import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
type Props = {};

function TextInput({}: Props) {
  const { register } = useFormContext();
  return (
    <>
      <FormControl>
        <FormLabel>テキスト</FormLabel>
        <Input placeholder="Basic usage" {...register("text")} />
      </FormControl>
    </>
  );
}

export default TextInput;
