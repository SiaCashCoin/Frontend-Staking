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
    lpSymbol: 'MICROSANTA-SCC LP',
    lpAddresses: {
      97: '',
      56: '0xf04bc5e9EB85374DDa27DD06FEbD1fe2e0CBdB16',   // lp address token-bnb
    },
    tokenSymbol: 'SCC',
    tokenAddresses: {
      97: '',
      56: '0xc26EaFC627624baDf990f8d30116892eD204DB51', // token address
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 5,
    lpSymbol: 'SCC-SHIB LP',
    lpAddresses: {
      97: '',
      56: '0xfe7be78a50a514b4390316a8e49d7574ba68ef64',   // lp address token-bnb
    },
    tokenSymbol: 'SCC',
    tokenAddresses: {
      97: '',
      56: '0xc26EaFC627624baDf990f8d30116892eD204DB51', // token address
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 7,
    lpSymbol: 'DOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xac109C8025F272414fd9e2faA805a583708A017f',   // lp address token-bnb
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '',
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  
]

export default farms
