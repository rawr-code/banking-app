export const DEPOSITS_ACTIONS = {
    GET: 'GET_DEPOSITS',
    ADD: 'ADD_DEPOSITS',
    LOADING: 'LOADING_DEPOSITS',
    ERROR: 'ERROR_DEPOSITS',
}

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: undefined,
}
const deposits = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DEPOSITS_ACTIONS.LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case DEPOSITS_ACTIONS.ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case DEPOSITS_ACTIONS.GET:
            return {
                ...state,
            }
        case DEPOSITS_ACTIONS.ADD:
            return {
                ...state,
                data: [...state.data, ...action.payload],
            }
        default:
            return state
    }
}

export default deposits
