import { Button, Center, Container, VStack } from "@chakra-ui/react";
import CheckInput from "./components/CheckInput";
import SelectInput from "./components/SelectInput";
import TextInput from "./components/TextInput";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInputContainer from "./components/TextInputContainer";

type Props = {};

const defaultValue = {
  text: "デフォルトテキスト",
  checkbox: true,
  select1: "option2",
  select2: "option3",
};

// zod

const formSchema = z.object({
  text: z.string().min(1, "テキストは１文字以上入力してください"),
  checkbox: z.literal(true).or(z.literal(false)),
  select1: z.string(),
  select2: z.string(),
});

export type Form = z.infer<typeof formSchema>;
function Page({}: Props) {
  const methods = useForm<Form>({
    defaultValues: defaultValue,
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: any) => alert(JSON.stringify(data, null, 2));
  return (
    <Container h="100vh" p={24}>
      <Center>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <VStack alignItems="start" justifyContent="center">
              {/* <TextInput name="text" /> */}
              <TextInputContainer name="text" />
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
