import React from 'react'
import { IoSwapHorizontal } from 'react-icons/io5'

// Hooks
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import useSwaps from '../hooks/useSwaps'

// Components
import Page from '../components/Page'
import List from '../components/List'
import TransactionCard from '../components/TransactionCard'
import InfoCard from '../components/InfoCard'

// Utils
import { formatDate } from '../utils/date'

const SwapCard = React.forwardRef(
    ({ to_buy_symbol, bought, to_spend_symbol, spent, onClick }, ref) => (
        <TransactionCard
            ref={ref}
            icon={IoSwapHorizontal}
            title={to_buy_symbol}
            description={to_spend_symbol}
            amount={bought}
            date={spent}
            onClick={onClick}
        />
    )
)

const SwapDetails = ({
    bought,
    to_buy_symbol,
    spent,
    to_spend_symbol,
    created_at,
    state,
    type,
}) => (
    <InfoCard>
        <h2>
            {bought} {to_buy_symbol}
            <p>
                {spent} {to_spend_symbol}
            </p>
        </h2>

        <h3>Type</h3>
        <p>{String(type).toUpperCase()}</p>
        <h3>Created at</h3>
        <p>{formatDate(created_at)}</p>
        <h3>State</h3>
        <p>{state}</p>
    </InfoCard>
)

const SwapsPage = () => {
    const { data, loading, error, reFetch } = useSwaps()
    const { observerRef } = useInfiniteScroll({ loading, reFetch })

    return (
        <Page title="Swaps">
            <List
                data={data}
                loading={loading}
                error={error}
                renderItem={SwapCard}
                detailItem={SwapDetails}
                observerRef={observerRef}
            />
        </Page>
    )
}

export default SwapsPage
