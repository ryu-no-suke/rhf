import React from "react";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

type Props = {};

type FormText = {
  [x: string]: string;
};

function TextInput({}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormText>();

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
