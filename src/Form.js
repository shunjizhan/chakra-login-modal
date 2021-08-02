import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
} from "@chakra-ui/core";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function Form() {
  const bgColor = '#ffffff'
  return (
    <Box bgColor={bgColor} p="30px 30px 30px 30px" w="400px" h="500px" boxShadow="lg" borderRadius="lg">
      <Tabs isFitted colorScheme="orange">
        <TabList m="0 80px 30px 80px">
          <Tab fontSize="120%" fontWeight="bold" _focus={{ boxShadow: "none" }}>登录</Tab>
          <Tab fontSize="120%" fontWeight="bold" _focus={{ boxShadow: "none" }}>注册</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignIn />
          </TabPanel>
          <TabPanel>
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
