import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'SCC',
    lpAddresses: {
      97: '',
      56: '0xc26EaFC627624baDf990f8d30116892eD204DB51',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0xc26EaFC627624baDf990f8d30116892eD204DB51',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'SCC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x41496D9e7F1364dab33433d28962745FAaF6a577',   // lp address token-bnb
    },
    tokenSymbol: 'SCC',
    tokenAddresses: {
      97: '',
      56: '0xc26EaFC627624baDf990f8d30116892eD204DB51', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
