import type { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

const customFocusBorderColor = '#946BEC'; 

export default function getDefaultFormColors(props: StyleFunctionProps) {
  const { focusBorderColor: fc, errorBorderColor: ec, filledBorderColor: flc } = props;
  return {
    focusBorderColor: fc || mode('blue.500', customFocusBorderColor)(props),
    focusPlaceholderColor: fc || 'gray.500',
    errorColor: ec || mode('red.400', 'red.300')(props),
    filledColor: flc || mode('gray.300', 'gray.600')(props),
  };
}
