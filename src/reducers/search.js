import { SEARCH_HEROS } from '../actions/search'

export default function search (state = [], action) {
  switch (action.type) {
    case SEARCH_HEROS:
      return {
        ...state,
        heros: [...action.heros]
      }
    default:
      return state
  }
}
