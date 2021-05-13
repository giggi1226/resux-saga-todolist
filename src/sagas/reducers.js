export default function counter(state = {}, action) {
  switch (action.type) {
    case 'REPOS':
      return {...state, repos: action.repos}
    default:
      return state
  }
}