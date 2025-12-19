import { LuSettings, LuSun } from 'react-icons/lu';
import { Link } from 'react-router';

import Logo from '/logo/logo-light.webp';
import { Box, Flex, Icon, IconButton, Image, Text } from '@chakra-ui/react';

import { ROUTE_PATHS } from '@/shared';

export const Header = () => {
  return (
    <Box as='header' h='60px'>
      <Flex
        h='full'
        w='full'
        alignItems='center'
        justifyContent='space-between'
        borderBottom='1px solid'
        borderColor='gray.200'
        px={4}
      >
        <Link to={ROUTE_PATHS.ROOT}>
          <Flex alignItems='center' gap={2}>
            <Image src={Logo} alt='Debloom Logo' boxSize={6} borderRadius='full' />
            <Text fontWeight='bold'>Debloom</Text>
          </Flex>
        </Link>
        <Flex alignItems='center' gap={2}>
          <IconButton aria-label='dark-mode' variant='ghost' rounded='full' _hover={{ bg: 'gray.100' }}>
            <Icon as={LuSun} boxSize={6} />
          </IconButton>
          <Link to={ROUTE_PATHS.SETTING}>
            <IconButton aria-label='settings' variant='ghost' rounded='full' _hover={{ bg: 'gray.100' }}>
              <Icon as={LuSettings} boxSize={6} />
            </IconButton>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
