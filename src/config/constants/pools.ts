import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'SCC',
    tokenAddress: '0xc26EaFC627624baDf990f8d30116892eD204DB51',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xc26EaFC627624baDf990f8d30116892eD204DB51',  // token address
    contractAddress: {
      97: '',
      56: '0x1080450b1e26Df071c613d916055b23e8FCc6Fca',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
