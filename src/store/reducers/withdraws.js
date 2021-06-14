export const WITHDRAWS_ACTIONS = {
    GET: 'GET_WITHDRAWS',
    ADD: 'ADD_WITHDRAWS',
    LOADING: 'LOADING_WITHDRAWS',
    ERROR: 'ERROR_WITHDRAWS',
}

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: undefined,
}
const withdraws = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WITHDRAWS_ACTIONS.LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case WITHDRAWS_ACTIONS.ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case WITHDRAWS_ACTIONS.GET:
            return {
                ...state,
            }
        case WITHDRAWS_ACTIONS.ADD:
            return {
                ...state,
                data: [...state.data, ...action.payload],
            }
        default:
            return state
    }
}

export default withdraws
