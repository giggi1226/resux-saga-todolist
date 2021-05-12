export default function counter(state = [], action) {
  switch (action.type) {
    case 'REPOS':
      console.log(action)
      return 
    default:
      return state
  }
}