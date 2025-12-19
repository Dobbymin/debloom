import { LuAlarmClock, LuCalendarDays, LuMessageSquare, LuPencil } from 'react-icons/lu';
import { Link } from 'react-router';

import { Box, Flex, Icon, Text, VStack } from '@chakra-ui/react';

import { ROUTE_PATHS } from '@/shared';

const NAV_ITEMS = [
  {
    navName: 'TODO',
    path: ROUTE_PATHS.TODO,
    icon: LuCalendarDays,
  },
  {
    navName: '뽀모도로',
    path: ROUTE_PATHS.POMODORO,
    icon: LuAlarmClock,
  },
  {
    navName: '기술 면접',
    path: ROUTE_PATHS.TECH_INTERVIEW,
    icon: LuMessageSquare,
  },
  {
    navName: 'TIL',
    path: ROUTE_PATHS.TIL,
    icon: LuPencil,
  },
];

export const Navigator = () => {
  return (
    <Flex as='nav' h='60px' w='full' justifyContent='center' borderTop='1px solid' borderColor='gray.200'>
      <Flex maxW='sm' w='full' justifyContent='space-between' gap={4} alignItems='center' px={4}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.path} to={item.path}>
            <VStack gap={1} h='full'>
              <Box cursor='pointer' rounded='full' _hover={{ bg: 'gray.100' }}>
                <Icon as={item.icon} boxSize={6} />
              </Box>
              <Text fontSize='xs' fontWeight='semibold'>
                {item.navName}
              </Text>
            </VStack>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};
