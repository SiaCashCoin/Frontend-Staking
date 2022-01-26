import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://dex.siacashcoin.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://dex.siacashcoin.com/#/pool',
      },
    ],
  },
  {
    label: 'SCC Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'SCC Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Bulk Send Dapp',
    icon: 'MoreIcon',
    href: 'https://bulksend.siacashcoin.com',
  },
  {
    label: 'LaunchPad',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Create Token ',
        href: 'https://createtoken.siacashcoin.com/',
      },
      {
        label: 'Safemoon Fork',
        href: 'https://createsafemoon.siacashcoin.com',
      },
    ],
  },
  {
    label: 'Win Tokens',
    icon: 'TicketIcon',
    items: [
      {
        label: 'Prediction',
        href: 'https://dogebets.siacashcoin.com/',
      },
      {
        label: 'CoinFlip',
        href: 'href:https://tokenpvp.com/tokens/0xc26EaFC627624baDf990f8d30116892eD204DB51',
      },
    ],
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     // {
  //     //   label: 'Voting',
  //     //   href: 'https://voting.siacashcoin.com',
  //     // },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.siacashcoin.com',
  //     },
  //     // {
  //     //   label: 'Blog',
  //     //   href: 'https://pancakeswap.medium.com',
  //     // },
  //   ],
  // },
]

export default config
