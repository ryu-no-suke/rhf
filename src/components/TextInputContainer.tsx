import { useFormContext } from "react-hook-form";
import TextInput from "./TextInput";

type Props = {
  name: string;
};
type FormText = {
  [x: string]: string;
};
function TextInputContainer({ name }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormText>();
  return (
    <TextInput
      {...register(name)}
      errorMessage={errors[name] && errors[name]?.message}
    />
  );
}

export default TextInputContainer;
