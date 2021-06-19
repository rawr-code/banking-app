import React from 'react'
import { IoRemove } from 'react-icons/io5'

// Hooks
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import useWithdraws from '../hooks/useWithdraws'

// Components
import Page from '../components/Page'
import List from '../components/List'
import TransactionCard from '../components/TransactionCard'
import InfoCard from '../components/InfoCard'

// Utils
import { formatDate } from '../utils/date'

const WithdrawCard = React.forwardRef(
    ({ currency, id, amount, created_at, onClick }, ref) => (
        <TransactionCard
            ref={ref}
            icon={IoRemove}
            title={currency.currency}
            description={id}
            amount={amount}
            date={created_at}
            onClick={onClick}
        />
    )
)

const WithdrawDetails = ({ amount, currency, withdraw_provider_id, created_at, state}) => (
    <InfoCard>
        <h2>
            {amount} {currency?.currency}
        </h2>
        <h3>Provider ID</h3>
        <p>{withdraw_provider_id}</p>
        <h3>Created at</h3>
        <p>{formatDate(created_at)}</p>
        <h3>State</h3>
        <p>{state}</p>
    </InfoCard>
)


const WithdrawsPage = () => {
    const { data, loading, error, reFetch } = useWithdraws()
    const { observerRef } = useInfiniteScroll({ loading, reFetch })

    return (
        <Page title="Withdraws">
            <List
                data={data}
                loading={loading}
                error={error}
                renderItem={WithdrawCard}
                detailItem={WithdrawDetails}
                observerRef={observerRef}
            />
        </Page>
    )
}

export default WithdrawsPage
