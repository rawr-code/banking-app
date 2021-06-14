export const SWAPS_ACTIONS = {
    GET: 'GET_SWAPS',
    ADD: 'ADD_SWAPS',
    LOADING: 'LOADING_SWAPS',
    ERROR: 'ERROR_SWAPS',
}

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: undefined,
}
const swaps = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SWAPS_ACTIONS.LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case SWAPS_ACTIONS.ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case SWAPS_ACTIONS.GET:
            return {
                ...state,
            }
        case SWAPS_ACTIONS.ADD:
            return {
                ...state,
                data: [...state.data, ...action.payload],
            }
        default:
            return state
    }
}

export default swaps
