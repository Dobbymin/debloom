import { Flex, type FlexProps } from "@chakra-ui/react";

type Props = FlexProps & {
  children: React.ReactNode;
};

export const LinkItem = ({ children, ...props }: Props) => (
  <Flex gap={2} flexDir="column" alignItems="center" justifyContent="center" {...props}>
    {children}
  </Flex>
);
