import React from "react";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
type Props = {};

function TextInput({}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormControl>
        <FormLabel>テキスト</FormLabel>
        <Input placeholder="Basic usage" {...register("text")} />
        {errors.text && (
          // <FormErrorMessage>{errors.text?.message}</FormErrorMessage>
          <Text>{errors.text.message}</Text>
        )}
      </FormControl>
    </>
  );
}

export default TextInput;
