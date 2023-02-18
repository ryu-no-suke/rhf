import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
type Props = {};

function TextInput({}: Props) {
  return (
    <>
      <FormControl>
        <FormLabel>テキスト</FormLabel>
        <Input placeholder="Basic usage" />
      </FormControl>
    </>
  );
}

export default TextInput;
