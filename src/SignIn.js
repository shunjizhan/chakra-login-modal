import React, { useState } from "react";
import {
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  InputRightAddon,
  Button,
  FormControl,
  Flex,
  Switch,
  FormLabel,
  Image,
} from "@chakra-ui/core";
import { FaUserAlt, FaLock, FaCheck } from "react-icons/fa";
import social from "./assets/social.png";

import { login } from './api/user';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true)

    const data = {
      user: {
        email: username,
        password,
      }
    }

    await login(data);
    setLoading(false)
    setUsername('')
    setPassword('')
    window.alert('finish!')
  }

  return (
    <form onSubmit={ handleSubmit }>
      <Stack spacing="5">
        <FormControl >
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input placeholder="手机号或邮箱" onChange={ e => setUsername(e.target.value) } />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={<FaLock />} />
            <Input type="password" placeholder="请输入密码" onChange={e => setPassword(e.target.value) } />
            <InputRightAddon children={<FaCheck />} />
          </InputGroup>
        </FormControl>
        <Flex>
          <Switch id="deal" mr="3" />
          <FormLabel htmlFor="deal">记住登陆？</FormLabel>
        </Flex>
        <Button _hover={{ bgColor: "#3194d0bb" }} w="100%" h="45px" borderRadius="20px" bgColor="#3194d0" color="white" padding="9px 18px" type="submit" disabled={ loading }>
          { loading ? '登陆中……' : '登陆' }
        </Button>
        <Image src={social} w="100%" p="20px 0 0 0"/>
      </Stack>
    </form>
  );
}
