import {
  FormControl,
  FormLabel,
  forwardRef,
  Input,
  InputProps,
  Text,
} from "@chakra-ui/react";

type Props = React.ComponentProps<"input"> & {
  errorMessage?: string;
};

const TextInput = forwardRef<InputProps & Props, "input">(
  ({ errorMessage, ...props }, ref) => {
    return (
      <>
        <FormControl>
          <FormLabel>テキスト</FormLabel>
          <Input placeholder="Basic usage" {...props} ref={ref} />
          {errorMessage && <Text>{errorMessage}</Text>}
        </FormControl>
      </>
    );
  }
);

export default TextInput;
