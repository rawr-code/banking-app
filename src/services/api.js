import axios from 'axios'

export const AUTH_TOKEN =
    'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3IiOiI2MGIxZGE4NzA5ODI2ODAwNjRiMWJmMDQiLCJhdXRoX2NsaWVudF9pZCI6IjYwNjdmNWE5YmRkNzJkMDBkMTA3NjM2NSIsImlzcyI6IjYwNjdmNThlYmRkNzJkMDBkMTA3NjM1YSIsImF1ZCI6InRyYW5zYWN0aW9uLGlkZW50aXR5LGF1dGgsbm90aWZpY2F0aW9uLGluZm8sdHJhbnNhY3Rpb24sYWNjb3VudCxkZXBvc2l0LHdpdGhkcmF3LHN3YXAiLCJlbWFpbCI6InNvcG9ydGUrX3Rlc3RpbmdAY29pbnNlbmRhLmNvbSIsImxhbmd1YWdlIjoiZXMiLCJtZXRhZGF0YSI6IntcImNsaWVudElkXCI6XCI2MDY3ZjVhOWJkZDcyZDAwZDEwNzYzNjVcIixcImFjY2Vzc190b2tlblwiOlwiajlPdmdLY1owRTdwZzlVNThVeXdNcVNObVJMVjBzR0V5bjZzZk9WMEVXeEZIM3FCQ1lZTGdHa3pjVldBdW1wZ1wiLFwidXNlci1pZFwiOlwiNjBiMWRhODcwOTgyNjgwMDY0YjFiZjA0XCIsXCJlbmNyeXB0ZWRfZGF0YVwiOlwiZmM1NjYxNGU5MGFlZjk5ZmRlZGQ3YTc1OTI3MWZiYzE6ZDk4YjVkMDdkYTA0Y2ViZjM5NDUyNTk3NjhcIixcInRoaXJkX3BhcnR5XCI6ZmFsc2V9IiwianRpIjoiNjBjM2EyMGNmYWRhYmMwMDY0Mjc1NTYwIiwiaWF0IjoxNjIzNDMzNzQwLCJleHAiOjkwMDAxNjIzNDMzNzQwfQ.M_z7gEBd7Hg38S_p2gH96IR5gKTAmjCnsoh7voJHw9tfJ4BNXX6mXzmiyZbFLaGR8isSJzOY362aY4IdspN1uA'
export const USER_ID = '60b1da870982680064b1bf04'

const BASE_URL = (subdomain, query) =>
    `https://${subdomain}.bitsenda.com/api/users/${USER_ID}/${query}`

export const API = {
    methods: {
        user: {
            get: {
                deposits: BASE_URL('deposit', 'deposits'),
                withdraws: BASE_URL('withdraw', 'withdraws'),
                swaps: BASE_URL('swap', 'swaps'),
            },
        },
    },
}

const customFetch = axios.create({
    headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
    },
})

export const getDeposits = async (url) => {
    try {
        const res = await customFetch.get(API.methods.user.get.deposits)
        const { data } = res
        return { data, success: true }
    } catch (error) {
        return {
            data: undefined,
            success: false,
            error,
        }
    }
}
export const getWithdraws = async (url) => {
    try {
        const res = await customFetch.get(API.methods.user.get.withdraws)
        const { data } = res
        return { data, success: true }
    } catch (error) {
        return {
            data: undefined,
            success: false,
            error,
        }
    }
}
export const getSwaps = async (url) => {
    try {
        const res = await customFetch.get(API.methods.user.get.swaps)
        const { data } = res
        return { data, success: true }
    } catch (error) {
        return {
            data: undefined,
            success: false,
            error,
        }
    }
}
