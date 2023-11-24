export default function AppReducer(state, action) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        news: [action.payload, ...state.news]
      }
    case 'DELETE_TRANSACTION':
      return {
       ...state,
         news: state.news.filter(news => news.id !== action.payload)
      }
    default:
      return state
  }
}