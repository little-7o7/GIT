const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filtersLoadingStatus: 'idle',
    filters: [],
    filterStatus: 'all'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_DELETING':
            return {
                ...state,
            }
        case 'HERO_DELETED':
            return {
                ...state,
                heroes: state.heroes.filter(hero => hero.id !== action.id),
            }
        case 'HERO_POSTING':
            return {
                ...state,
            }
        case 'HERO_POSTED':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
            }
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case 'FILTER_STATUS_ALL':
            return {
                ...state,
                filterStatus: 'all'
            }
        case 'FILTER_STATUS_FIRE':
            return {
                ...state,
                filterStatus: 'fire'
            }
        case 'FILTER_STATUS_WATER':
            return {
                ...state,
                filterStatus: 'water'
            }
        case 'FILTER_STATUS_WIND':
            return {
                ...state,
                filterStatus: 'wind'
            }
        case 'FILTER_STATUS_EARTH':
            return {
                ...state,
                filterStatus: 'earth'
            }
        default: return state
    }
}

export default reducer;