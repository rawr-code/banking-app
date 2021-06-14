import React, { useState, useRef, useCallback } from 'react'
import { BiWallet, BiTransferAlt } from 'react-icons/bi'
import { RiRefund2Line } from 'react-icons/ri'
import { motion } from 'framer-motion'

import useDeposits from '../hooks/useDeposits'
import useWithdraws from '../hooks/useWithdraws'
import useSwaps from '../hooks/useSwaps'

import Layout from '../components/Layout'
import Avatar from '../components/Avatar'
import Nav from '../components/Nav'
import NavItem from '../components/NavItem'
import Info from '../components/Info'
import Title from '../components/Title'
import { Table, TableItem } from '../components/Table'

const formatDate = (date) => {
    const mainDate = new Date(date)

    const formatDate = `${mainDate.getDate()}.${mainDate.getMonth()}.${mainDate.getFullYear()} ${mainDate.getHours()}:${mainDate.getMinutes()}`

    return formatDate
}

const App = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [headerTitle, setHeaderTitle] = useState('Deposits')
    const loader = useRef(null)

    const deposits = useDeposits()
    const withdraws = useWithdraws()
    const swaps = useSwaps()

    const hasError = deposits.error || withdraws.error || swaps.error
    const isLoading = deposits.loading || withdraws.loading || swaps.loading

    let data = []
    if (activeTab === 0) data = deposits.data
    if (activeTab === 1) data = withdraws.data
    if (activeTab === 2) data = swaps.data

    const observer = useRef()
    const lastElementRef = useCallback(
        (node) => {
            if (deposits.loading || withdraws.loading || swaps.loading) return
            if (observer.current) observer.current.disconnect()
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    if (activeTab === 0) deposits.reFetch()
                    if (activeTab === 1) withdraws.reFetch()
                    if (activeTab === 2) swaps.reFetch()
                }
            })
            if (node) observer.current.observe(node)
        },
        [deposits, withdraws, swaps, activeTab]
    )

    const handleChange = (tab, label) => () => {
        setActiveTab(tab)
        setHeaderTitle(label)
        if (activeTab === 0) deposits.reFetch()
        if (activeTab === 1) withdraws.reFetch()
        if (activeTab === 2) swaps.reFetch()
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerDirection: -1,
                staggerChildren: 0.4,
            },
        },
    }

    const items = {
        hidden: {
            opacity: 0,
            x: '100vw',
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                mass: 0.4,
                damping: 8,
                when: 'beforeChildren',
                staggerChildren: 0.4,
            },
        },
    }

    return (
        <Layout>
            <Nav>
                <NavItem onClick={handleChange(0, 'Deposits')}>
                    <BiWallet size={24} color="black" />
                </NavItem>
                <NavItem onClick={handleChange(1, 'Withdraws')}>
                    <BiTransferAlt size={24} color="black" />
                </NavItem>
                <NavItem onClick={handleChange(2, 'Swaps')}>
                    <RiRefund2Line size={24} color="black" />
                </NavItem>
            </Nav>
            <Table>
                <Title>{headerTitle}</Title>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {data.map((item, i) => {
                        const props = {}
                        const isLastElement = data.length === i + 1

                        if (isLastElement) props.ref = lastElementRef
                        return (
                            <motion.div variants={items} key={i}>
                                <TableItem {...props}>
                                    <Avatar src="https://mir-s3-cdn-cf.behance.net/user/115/26e29627470952.6068b44e86ead.jpg" />
                                    <Info>
                                        <p>{item.info?.serviceMode}</p>
                                        <p>{item?.id}</p>
                                    </Info>
                                    <Info>
                                        <p>- $ {item?.amount}</p>
                                        <p>{formatDate(item.created_at)}</p>
                                    </Info>
                                </TableItem>
                            </motion.div>
                        )
                    })}
                </motion.div>
                {!hasError && isLoading && <p>Loading...</p>}
                {hasError && <p>Error!</p>}
                <div ref={loader} />
            </Table>
        </Layout>
    )
}

export default App
