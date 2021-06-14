import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDeposits } from '../actions'

const useDeposits = () => {
    const dispatch = useDispatch()

    const {
        data = null,
        loading,
        error,
    } = useSelector((state) => {
        const { data, loading, error } = state?.deposits
        return { data, loading, error }
    })

    const reFetch = () => fetchDeposits(dispatch)

    useEffect(() => {
        fetchDeposits(dispatch)
    }, [dispatch])

    return { data, loading, error, reFetch }
}

export default useDeposits
