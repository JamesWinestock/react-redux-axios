import { FETCH_USERS, FETCH_USER } from '../actions/index';

const INITIAL_STATE = { all: [], users: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, user: actions.payload.data}
    case FETCH_USERS:
      return { ...state, all: action.payload.data }
    default:
      return state;
  }
}
