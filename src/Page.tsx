import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CheckInput from "./components/CheckInput";
import SelectInput from "./components/SelectInput";
import TextInput from "./components/TextInput";

type Props = {};

function Page({}: Props) {
  return (
    <Container h="100vh" p={24}>
      <Center>
        <form>
          <VStack alignItems="start" justifyContent="center">
            <TextInput />
            <CheckInput />
            <SelectInput />
            <Button w="full" type="submit">
              登録
            </Button>
          </VStack>
        </form>
      </Center>
    </Container>
  );
}

export default Page;
