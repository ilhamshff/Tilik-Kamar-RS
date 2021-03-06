import {
  Divider,
  HStack,
  Link,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <VStack
    py={5}
    bg={useColorModeValue('gray.100', 'gray.800')}
    fontSize="sm"
    fontWeight="600"
    transition="background 100ms linear"
  >
    <HStack>
      <FaGithub size="20px" />
      <Link href="https://github.com/ilhamshf" isExternal>
        Github Ilhamshf
      </Link>
      <Divider orientation="vertical" h="18px" />
      <Link
        href="https://github.com/satyawikananda/rs-bed-covid-indo-api"
        isExternal
      >
        Sumber API
      </Link>
    </HStack>
  </VStack>
);

export default Footer;