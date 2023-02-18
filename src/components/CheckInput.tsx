import React from "react";
import { chakra, Flex, useCheckbox, Text, Box } from "@chakra-ui/react";
import { useController, useFormContext } from "react-hook-form";
type Props = {};

// チェックON/OFFの表示がRHFのvalueを使う

function CheckInput(props: Props) {
  const {
    field: { ref, ...rest },
  } = useController({ name: "checkbox" });

  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      maxW="36"
      bg="green.50"
      border="1px solid"
      borderColor="green.500"
      rounded="lg"
      px={3}
      py={1}
      cursor="pointer"
      {...htmlProps}
      {...rest}
    >
      <input {...getInputProps()} hidden ref={ref} />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor="green.500"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {/* {state.isChecked && <Box w={2} h={2} bg="green.500" />} */}
        {rest.value && <Box w={2} h={2} bg="green.500" />}
      </Flex>
      <Text color="gray.700" {...getLabelProps()}>
        Click me
      </Text>
    </chakra.label>
  );
}

export default CheckInput;
