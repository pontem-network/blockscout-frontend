import { useColorModeValue } from '@chakra-ui/react';

const customActiveLinkColor = '#FFFFFF';
const customHoverLinkColor = '#946BEC';

export default function useColors() {
  return {
    text: {
      'default': useColorModeValue('gray.600', 'gray.400'),
      active: useColorModeValue('blue.700', customActiveLinkColor),
      hover: useColorModeValue('blue.700', customHoverLinkColor)
    },
    bg: {
      'default': 'transparent',
      active: useColorModeValue('blue.50', customHoverLinkColor),
    },
    border: {
      'default': 'divider',
      active: useColorModeValue('blue.50', customHoverLinkColor),
    },
  };
}
