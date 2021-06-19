import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
    IoStorefrontOutline,
    IoWalletOutline,
    IoStatsChartOutline,
    IoTimeOutline,
} from 'react-icons/io5'

import GlobalStyles from '../components/GlobalStyles'
import MainLayout from '../components/MainLayout'
import Navigation from '../components/Navigation'

import HomePage from '../pages/Home'
import DepositsPage from '../pages/Deposits'
import WithdrawsPage from '../pages/Withdraws'
import SwapsPage from '../pages/Swaps'

const appRouter = [
    {
        title: 'Home',
        icon: IoStorefrontOutline,
        url: '/',
        page: HomePage,
        exact: true,
    },
    {
        title: 'Deposits',
        icon: IoWalletOutline,
        url: '/deposits',
        page: DepositsPage,
        exact: true,
    },
    {
        title: 'Withdraws',
        icon: IoStatsChartOutline,
        url: '/withdraws',
        page: WithdrawsPage,
        exact: true,
    },
    {
        title: 'Swaps',
        icon: IoTimeOutline,
        url: '/swaps',
        page: SwapsPage,
        exact: true,
    },
]

const appContent = () => (
    <Switch>
        {appRouter.map((route) => (
            <Route key={route.url} path={route.url} exact={route.exact}>
                <route.page />
            </Route>
        ))}
    </Switch>
)

const appNavigation = () => <Navigation router={appRouter} />

const App = () => (
    <>
        <GlobalStyles />
        <MainLayout content={appContent} nav={appNavigation} />
    </>
)

export default App
