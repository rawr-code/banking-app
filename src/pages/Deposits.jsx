import React from 'react'
import { IoAdd } from 'react-icons/io5'

// Hooks
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import useDeposits from '../hooks/useDeposits'

// Components
import Page from '../components/Page'
import List from '../components/List'
import TransactionCard from '../components/TransactionCard'
import InfoCard from '../components/InfoCard'

// Utils
import { formatDate } from '../utils/date'

const DepositCard = React.forwardRef(
    ({ currency, id, amount, created_at, onClick }, ref) => (
        <TransactionCard
            ref={ref}
            icon={IoAdd}
            title={currency.currency}
            description={id}
            amount={amount}
            date={created_at}
            onClick={onClick}
        />
    )
)


const DepositDetails = ({ amount, currency, deposit_provider_id, created_at, state}) => (
    <InfoCard>
        <h2>
            {amount} {currency?.currency}
        </h2>
        <h3>Provider ID</h3>
        <p>{deposit_provider_id}</p>
        <h3>Created at</h3>
        <p>{formatDate(created_at)}</p>
        <h3>State</h3>
        <p>{state}</p>
    </InfoCard>
)

const DepositsPage = () => {
    const { data, loading, error, reFetch } = useDeposits()
    const { observerRef } = useInfiniteScroll({ loading, reFetch })

    return (
        <Page title="Deposits">
            <List
                data={data}
                loading={loading}
                error={error}
                renderItem={DepositCard}
                detailItem={DepositDetails}
                observerRef={observerRef}
            />
        </Page>
    )
}

export default DepositsPage
