export const TYPES = {
    UPDATE_SEARCH: "UPDATE_SEARCH",
    SET_SEARCH_FIELD: "SET_SEARCH_FIELD",
    SET_COLORS: "SET_COLORS",
    CLEAR_FILTER: "CLEAR_FILTER"
}

export const updateSearch = payload => ({
    type: TYPES.UPDATE_SEARCH,
    payload
})

export const setColors = payload => ({
    type: TYPES.SET_COLORS,
    payload
})

export const setSearchField = payload => ({
    type: TYPES.SET_SEARCH_FIELD,
    payload
})

export const clearFilter = _ => ({
    type: TYPES.CLEAR_FILTER
})