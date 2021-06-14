import { getDeposits, getSwaps, getWithdraws } from '../services/data'
import { DEPOSITS_ACTIONS } from '../store/reducers/deposits'
import { WITHDRAWS_ACTIONS } from '../store/reducers/withdraws'
import { SWAPS_ACTIONS } from '../store/reducers/swaps'

export const fetchDeposits = async (dispatch) => {
    dispatch({
        type: DEPOSITS_ACTIONS.LOADING,
        payload: true,
    })

    const { data, success, error } = await getDeposits()

    if (success) {
        dispatch({
            type: DEPOSITS_ACTIONS.ERROR,
            payload: undefined,
        })
        data.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at)
        })

        dispatch({
            type: DEPOSITS_ACTIONS.ADD,
            payload: data,
        })
        dispatch({
            type: DEPOSITS_ACTIONS.LOADING,
            payload: false,
        })
    } else {
        dispatch({
            type: DEPOSITS_ACTIONS.ERROR,
            payload: error,
        })
    }
}
export const fetchWithdraws = async (dispatch) => {
    dispatch({
        type: WITHDRAWS_ACTIONS.LOADING,
        payload: true,
    })

    const { data, success, error } = await getWithdraws()

    if (success) {
        dispatch({
            type: WITHDRAWS_ACTIONS.ERROR,
            payload: undefined,
        })
        data.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at)
        })

        dispatch({
            type: WITHDRAWS_ACTIONS.ADD,
            payload: data,
        })
        dispatch({
            type: WITHDRAWS_ACTIONS.LOADING,
            payload: false,
        })
    } else {
        dispatch({
            type: WITHDRAWS_ACTIONS.ERROR,
            payload: error,
        })
    }
}
export const fetchSwaps = async (dispatch) => {
    dispatch({
        type: SWAPS_ACTIONS.LOADING,
        payload: true,
    })

    const { data, success, error } = await getSwaps()

    if (success) {
        dispatch({
            type: SWAPS_ACTIONS.ERROR,
            payload: undefined,
        })
        data.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at)
        })

        dispatch({
            type: SWAPS_ACTIONS.ADD,
            payload: data,
        })
        dispatch({
            type: SWAPS_ACTIONS.LOADING,
            payload: false,
        })
    } else {
        dispatch({
            type: SWAPS_ACTIONS.ERROR,
            payload: error,
        })
    }
}
