import type { SystemStyleInterpolation } from '@chakra-ui/styled-system';
import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

import getDefaultTransitionProps from '../utils/getDefaultTransitionProps';

const baseStyle = defineStyle(getDefaultTransitionProps());

const customLinkColor = '#FFFFFF';
const customLinkHoverColor = '#946BEC';

const variantPrimary = defineStyle((props) => {
  return {
    color: 'link',
    _hover: {
      color: 'link_hovered',
      textDecorationStyle: props.textDecorationStyle || 'solid',
    },
  };
});

const variantSecondary = defineStyle((props) => {
  return {
    color: mode('gray.600', 'gray.500')(props),
    _hover: {
      color: mode('gray.600', 'gray.400')(props),
    },
  };
});

const variantLumio= defineStyle((props) => {
  return {
    color: mode('gray.600', customLinkColor)(props),
    _hover: {
      color: mode('gray.600', customLinkHoverColor)(props),
    },
  };
});

const variants: Record<string, SystemStyleInterpolation> = {
  primary: variantPrimary,
  secondary: variantSecondary,
  lumio: variantLumio,
};

const defaultProps = {
  variant: 'lumio',
};

const Link = defineStyleConfig({
  variants,
  defaultProps,
  baseStyle,
});

export default Link;
