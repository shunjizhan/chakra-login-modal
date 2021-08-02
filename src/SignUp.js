import React from "react";
import {
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  InputRightAddon,
  FormHelperText,
  RadioGroup,
  Radio,
  Select,
  Button,
  FormControl
} from "@chakra-ui/core";
import { FaUserAlt, FaLock, FaCheck, FaPhone } from "react-icons/fa";

export default function SignUp() {
  return (
    <form>
      <Stack spacing="5">
        <FormControl>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input placeholder="请输入昵称" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={<FaPhone />} />
            <Input placeholder="请输入用户名" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={<FaLock />} />
            <Input type="password" placeholder="请输入密码" />
            <InputRightAddon children={<FaCheck />} />
          </InputGroup>
        </FormControl>
        <Button _hover={{ bgColor: "#42c021bb" }} w="100%" h="45px" borderRadius="20px" bgColor="#42c021" color="white" padding="9px 18px">
          登录
        </Button>
      </Stack>
    </form>
  );
}
