import { IoAdd, IoLogoGithub } from "react-icons/io5";

import { Flex, Icon, Image, Text } from "@chakra-ui/react";

import BaekjoonLogo from "../../../_assets/baekjoon.webp";
import InflabLogo from "../../../_assets/inflab.webp";
import ProgrammersLogo from "../../../_assets/programmers.svg";
import { LinkItem, LinkLabel } from "../../common";

export const UserLink = () => {
  return (
    <Flex w="full" justifyContent="start" gap={5} px={5} pb={3}>
      <LinkItem>
        <Flex w={10} h={10} rounded="full" alignItems="center" justifyContent="center">
          <Icon as={IoLogoGithub} boxSize={10} />
        </Flex>
        <LinkLabel>Github</LinkLabel>
      </LinkItem>

      <LinkItem>
        <Flex
          w={10}
          h={10}
          rounded="full"
          border="1px solid"
          borderColor="neutral.300"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={BaekjoonLogo} rounded="full" boxSize={7} />
        </Flex>
        <LinkLabel>백준</LinkLabel>
      </LinkItem>

      <LinkItem>
        <Flex w={10} h={10} rounded="full" alignItems="center" justifyContent="center" bg="#202B3D">
          <Image src={ProgrammersLogo} boxSize={6} />
        </Flex>
        <LinkLabel>프로그래머스</LinkLabel>
      </LinkItem>

      <LinkItem>
        <Flex
          w={10}
          h={10}
          rounded="full"
          border="1px solid"
          borderColor="neutral.300"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={InflabLogo} rounded="full" boxSize={7} />
        </Flex>
        <LinkLabel>인프런</LinkLabel>
      </LinkItem>

      <LinkItem>
        <Flex
          w={10}
          h={10}
          rounded="full"
          border="1px"
          borderStyle="dashed"
          borderColor="neutral.300"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
        >
          <Icon color="neutral.300" as={IoAdd} boxSize={6} />
        </Flex>
        <LinkLabel>
          <Text color="transparent" userSelect="none">
            -
          </Text>
        </LinkLabel>
      </LinkItem>
    </Flex>
  );
};
