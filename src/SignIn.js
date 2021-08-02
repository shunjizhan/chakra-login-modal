import React from "react";
import {
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  InputRightAddon,
  FormHelperText,
  Button,
  FormControl,
  Flex,
  Switch,
  FormLabel,
  Image,
} from "@chakra-ui/core";
import { FaUserAlt, FaLock, FaCheck } from "react-icons/fa";
import social from "./assets/social.png";

export default function SignIn() {
  return (
    <form>
      <Stack spacing="5">
        <FormControl>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input placeholder="手机号或邮箱" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={<FaLock />} />
            <Input type="password" placeholder="请输入密码" />
            <InputRightAddon children={<FaCheck />} />
          </InputGroup>
        </FormControl>
        <Flex>
          <Switch id="deal" mr="3" />
          <FormLabel htmlFor="deal">记住登陆？</FormLabel>
        </Flex>
        <Button _hover={{ bgColor: "#3194d0bb" }} w="100%" h="45px" borderRadius="20px" bgColor="#3194d0" color="white" padding="9px 18px">
          登录
        </Button>
        <Image src={social} w="100%" p="20px 0 0 0"/>
      </Stack>
    </form>
  );
}
