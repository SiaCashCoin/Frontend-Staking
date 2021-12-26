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
  
  {
    pid: 2,
    lpSymbol: 'SCC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xf04bc5e9EB85374DDa27DD06FEbD1fe2e0CBdB16',   // lp address token-bnb
    },
    tokenSymbol: 'SCC',
    tokenAddresses: {
      97: '',
      56: '0xc26EaFC627624baDf990f8d30116892eD204DB51', // token address
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    lpSymbol: 'MicroSanta-SCC LP',
    lpAddresses: {
      97: '',
      56: '0xc56651b7dbafc0422dc5bc9cbcc47351fefcfa65',   // lp address token-bnb
    },
    tokenSymbol: 'MICROSANTA',
    tokenAddresses: {
      97: '',
      56: '0x49e558939f6dd099c2bc29bd84b75af82b5ad1b3', // token address
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.microsanta,
  },

]

export default farms
