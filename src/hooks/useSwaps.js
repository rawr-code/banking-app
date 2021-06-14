import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSwaps } from '../actions'

const useDeposits = () => {
    const dispatch = useDispatch()

    const {
        data = null,
        loading,
        error,
    } = useSelector((state) => {
        const { data, loading, error } = state?.swaps
        return { data, loading, error }
    })

    const reFetch = () => fetchSwaps(dispatch)

    useEffect(() => {
        fetchSwaps(dispatch)
    }, [dispatch])

    return { data, loading, error, reFetch }
}

export default useDeposits
