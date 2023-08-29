import { Box, Flex, Td, Tr, Skeleton } from '@chakra-ui/react';
import BigNumber from 'bignumber.js';
import React from 'react';

import type { TokenInfo } from 'types/api/token';

import AddressAddToWallet from 'ui/shared/address/AddressAddToWallet';
import AddressLink from 'ui/shared/address/AddressLink';
import Tag from 'ui/shared/chakra/Tag';
import type { EntityProps as AddressEntityProps } from 'ui/shared/entities/address/AddressEntity';
import AddressEntity from 'ui/shared/entities/address/AddressEntity';
import TokenLogo from 'ui/shared/TokenLogo';

type Props = {
  token: TokenInfo;
  index: number;
  page: number;
  isLoading?: boolean;
}

const PAGE_SIZE = 50;

const TokensTableItem = ({
  token,
  page,
  index,
  isLoading,
}: Props) => {

  const {
    address,
    exchange_rate: exchangeRate,
    type,
    name,
    symbol,
    holders,
    circulating_market_cap: marketCap,
  } = token;

  const tokenString = [ name, symbol && `(${ symbol })` ].filter(Boolean).join(' ');
  const tokenAddress: AddressEntityProps['address'] = {
    hash: address,
    name: '',
    implementation_name: null,
    is_contract: true,
    is_verified: false,
  };

  return (
    <Tr>
      <Td>
        <Flex alignItems="flex-start">
          <Skeleton
            isLoaded={ !isLoading }
            fontSize="sm"
            lineHeight="24px"
            fontWeight={ 600 }
            mr={ 3 }
            minW="28px"
          >
            { (page - 1) * PAGE_SIZE + index + 1 }
          </Skeleton>
          <Box overflow="hidden">
            <Flex alignItems="center">
              <TokenLogo data={ token } boxSize={ 6 } mr={ 2 } isLoading={ isLoading }/>
              <AddressLink fontSize="sm" fontWeight="700" hash={ address } type="token" alias={ tokenString } isLoading={ isLoading }/>
            </Flex>
            <Box ml={ 8 } mt={ 2 }>
              <Flex>
                <AddressEntity
                  address={ tokenAddress }
                  isLoading={ isLoading }
                  noIcon
                  truncation="constant"
                  fontSize="sm"
                  fontWeight={ 500 }
                />
                <AddressAddToWallet token={ token } ml={ 2 } isLoading={ isLoading }/>
              </Flex>
              <Box mt={ 3 } >
                <Tag isLoading={ isLoading }>{ type }</Tag>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Td>
      <Td isNumeric>
        <Skeleton isLoaded={ !isLoading } fontSize="sm" lineHeight="24px" fontWeight={ 500 } display="inline-block">
          { exchangeRate && `$${ Number(exchangeRate).toLocaleString(undefined, { minimumSignificantDigits: 4 }) }` }
        </Skeleton>
      </Td>
      <Td isNumeric maxWidth="300px" width="300px">
        <Skeleton isLoaded={ !isLoading } fontSize="sm" lineHeight="24px" fontWeight={ 500 } display="inline-block">
          { marketCap && `$${ BigNumber(marketCap).toFormat() }` }
        </Skeleton>
      </Td>
      <Td isNumeric>
        <Skeleton
          isLoaded={ !isLoading }
          fontSize="sm"
          lineHeight="24px"
          fontWeight={ 500 }
          display="inline-block"
        >
          { Number(holders).toLocaleString() }
        </Skeleton>
      </Td>
    </Tr>
  );
};

export default TokensTableItem;
