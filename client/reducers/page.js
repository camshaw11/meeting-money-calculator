const initialState = {
  currentPage: "list",
  currentId: 1,
}

export default function page(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
        currentId: action.currentId
      }
    default:
      return state
  }
}