import { Button, Center, Container, VStack } from "@chakra-ui/react";
import CheckInput from "./components/CheckInput";
import SelectInput from "./components/SelectInput";
import TextInput from "./components/TextInput";
import { useForm, FormProvider } from "react-hook-form";

type Props = {};

const defaultValue = {
  text: "デフォルトテキスト",
  checkbox: true,
  select1: "option2",
  select2: "option3",
};
function Page({}: Props) {
  const methods = useForm({
    defaultValues: defaultValue,
  });
  const onSubmit = (data: any) => alert(JSON.stringify(data, null, 2));
  return (
    <Container h="100vh" p={24}>
      <Center>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <VStack alignItems="start" justifyContent="center">
              <TextInput />
              <CheckInput />
              <SelectInput />
              <Button w="full" type="submit">
                登録
              </Button>
            </VStack>
          </form>
        </FormProvider>
      </Center>
    </Container>
  );
}

export default Page;
