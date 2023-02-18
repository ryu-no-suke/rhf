import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
};

type FormText = {
  [x: string]: string;
};

function TextInput({ name }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormText>();

  return (
    <>
      <FormControl>
        <FormLabel>テキスト</FormLabel>
        <Input placeholder="Basic usage" {...register(name)} />
        {errors[name] && <Text>{errors[name]?.message}</Text>}
      </FormControl>
    </>
  );
}

export default TextInput;
