import React, { useState } from "react";
import {
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  InputRightAddon,
  Button,
  FormControl
} from "@chakra-ui/core";
import { FaUserAlt, FaLock, FaCheck, FaPhone } from "react-icons/fa";

import { signUp } from './api/user';

export default function SignUp() {
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true)

    const data = {
      user:{
        username: nickname,
        email: username,
        password,
      }
    };
  
    await signUp(data)
    setLoading(false)
  }

  return (
    <form onSubmit={ handleSubmit }>
      <Stack spacing="5">
        <FormControl>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input placeholder="请输入昵称" onChange={ e => setNickname(e.target.value) } />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={<FaPhone />} />
            <Input placeholder="请输入用户名" onChange={ e => setUsername(e.target.value) } />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={<FaLock />} />
            <Input type="password" placeholder="请输入密码" onChange={ e => setPassword(e.target.value) } />
            <InputRightAddon children={<FaCheck />} />
          </InputGroup>
        </FormControl>
        <Button _hover={{ bgColor: "#42c021bb" }} w="100%" h="45px" borderRadius="20px" bgColor="#42c021" color="white" padding="9px 18px" type="submit" disabled={ loading }>
          { loading ? "注册中……" : "注册" }
        </Button>
      </Stack>
    </form>
  );
}
