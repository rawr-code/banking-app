import React from 'react'
import styled from 'styled-components'

// Components
import Page from '../components/Page'

import TransactionCard from '../components/TransactionCard'

const GridCards = styled.div``

const Balance = styled.div`
    background: #070707;
    padding: 1.5rem 1rem;
    border-radius: 1rem;
    color: #fff;
    text-align: center;

    & > h2 {
        margin: 0;
        font-size: 1rem;
        font-weight: bold;
    }
    & > h3 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 400;
    }
`

const Wallets = styled.div`
    display: grid;
    grid-row-gap: 1rem;
    & > h2 {
        color: #070707;
        margin: 1rem 0.5rem 0;
        font-size: 1rem;
        font-weight: bold;
    }
`

const HomePage = () => {
    return (
        <Page title="Dashboard">
            <GridCards>
                <Balance>
                    <h2>Balance</h2>
                    <h3>$ 1.000.000</h3>
                </Balance>
                <Wallets>
                    <h2>Wallets</h2>
                    <TransactionCard
                        avatar="https://static.coinbtr.com/media/coins/BTC_9ItLsUF.png"
                        title="Bitcoin"
                        description="18.159,44 $"
                        amount="0,004449 BTC"
                        date="80,79 $"
                    />
                    <TransactionCard
                        avatar="https://static.coinbtr.com/media/coins/ETH_fNCzuBy.png"
                        title="Ethereum"
                        description="18.159,44 $"
                        amount="0,004449 ETH"
                        date="80,79 $"
                    />
                    <TransactionCard
                        avatar="https://static.coinbtr.com/media/coins/LTC_O4Ktdtr.png"
                        title="Litecoin"
                        description="18.159,44 $"
                        amount="0,004449 LTC"
                        date="80,79 $"
                    />
                    <TransactionCard
                        avatar="https://static.coinbtr.com/media/coins/DASH_7yHBf0P.png"
                        title="Dash"
                        description="18.159,44 $"
                        amount="0,004449 DASH"
                        date="80,79 $"
                    />
                </Wallets>
            </GridCards>
        </Page>
    )
}

export default HomePage
