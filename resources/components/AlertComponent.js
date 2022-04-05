/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Alert,
  VStack,
  HStack,
  Text,
  IconButton,
  CloseIcon,
  Center,
} from 'native-base';

export default function AlertComponent({title, body}) {
  return (
    <Center
      flex={1}
      justifyContent={'center'}
      position={'absolute'}
      h="full"
      w="full"
      bg="#0009"
      rounded="md">
      <Alert status={title} p={5} rounded={'lg'} shadow={3}>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} justifyContent="space-between">
            <HStack space={2} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text fontSize="md" color="coolGray.800">
                {body}
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" color="coolGray.600" />}
            />
          </HStack>
        </VStack>
      </Alert>
    </Center>
  );
}
