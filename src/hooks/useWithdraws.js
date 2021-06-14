import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWithdraws } from '../actions'

const useDeposits = () => {
    const dispatch = useDispatch()

    const {
        data = null,
        loading,
        error,
    } = useSelector((state) => {
        const { data, loading, error } = state?.withdraws
        return { data, loading, error }
    })

    const reFetch = () => fetchWithdraws(dispatch)

    useEffect(() => {
        fetchWithdraws(dispatch)
    }, [dispatch])

    return { data, loading, error, reFetch }
}

export default useDeposits
