
import { INCREMENT, DECREMENT } from '../action/counterAction';
const INITIAL_STATE = {
    account: {
        access_token: '',
        refresh_token: '',
        username: ''
    }
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1,
            };

        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default userReducer;