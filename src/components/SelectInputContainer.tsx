import { useFormContext } from "react-hook-form";
import SelectInput from "./SelectInput";

type Props = {
  label: string;
  name: string;
};
type FormSelect = {
  [x: string]: string;
};
function SelectInputContainer({ name, label }: Props) {
  const { register } = useFormContext<FormSelect>();
  return <SelectInput label={label} {...register(name)} />;
}

export default SelectInputContainer;
