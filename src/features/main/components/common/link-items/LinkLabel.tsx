import { Text } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};
export const LinkLabel = ({ children }: Props) => (
  <Text fontSize="xs" fontWeight="bold" textAlign="center">
    {children}
  </Text>
);
