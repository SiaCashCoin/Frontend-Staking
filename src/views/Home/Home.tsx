import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'

const Hero = styled.div`
  align-items: center;
  // background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
  background-repeat: no-repeat;
  background-position: left top, right top;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 136px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'SiaCashCoin')}
        </Heading>
        <Text>{TranslateString(578, 'SiaCashCoin is pending migration to Binance Smart Chain! ')}</Text>
        <Text>{TranslateString(578, 'The new SCC BSC smart contract address is')}</Text>
        <Text>{TranslateString(578, '0xc26EaFC627624baDf990f8d30116892eD204DB51')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <EarnAPYCard />
          {/* <EarnAssetCard /> */}
          {/* <LotteryCard /> */}
        </Cards>
        <CTACards>
          {/* <EarnAPYCard /> */}
          {/* <WinCard /> */}
        </CTACards>
        <Cards>
          <CakeStats />
         {/* <TotalValueLockedCard /> */}
        </Cards>
      </div>
    </Page>
  )
}

export default Home
