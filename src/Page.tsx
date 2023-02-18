import { Button, Center, Container, VStack } from "@chakra-ui/react";
import CheckInput from "./components/CheckInput";
import SelectInput from "./components/SelectInput";
import TextInput from "./components/TextInput";
import { useForm, FormProvider } from "react-hook-form";

type Props = {};

function Page({}: Props) {
  const methods = useForm();
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
