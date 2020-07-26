import { TYPES } from "./AppActions";

export function reducer(state, action) {
  switch (action.type) {
    case TYPES.SET_COLORS:
      return {
        ...state,
        colors: action.payload,
      };
    case TYPES.UPDATE_SEARCH:
      let filtered = [];
      const { payload } = action;
      if (payload) {
        filtered = state.colors.filter((color) =>
          color.toLowerCase().includes(payload.toLowerCase())
        );
        console.log("filtered", state);
      }
      return {
        ...state,
        search: action.payload,
        filteredColors: [...filtered],
      };
    case TYPES.SET_SEARCH_FIELD:
        return {
            ...state,
            search: action.payload,
            filteredColors:[]
        }
    case TYPES.CLEAR_FILTER:
        return {
            ...state,
            filteredColors: []
        }
    default:
        return state
  }
}
