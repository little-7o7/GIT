export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}



export const heroDeleting = () => {
    return {
        type: 'HERO_DELETING'
    }
}

export const heroDeleted = (id) => {
    return {
        type: 'HERO_DELETED',
        id
    }
}



export const heroPosting = () => {
    return {
        type: 'HERO_POSTING'
    }
}

export const heroPosted = (data) => {
    return {
        type: 'HERO_POSTED',
        payload: data
    }
}



export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING',
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR',
    }
}



export const filterStatusAll = () => {
    return {
        type: 'FILTER_STATUS_ALL',
    }
}

export const filterStatusFire = () => {
    return {
        type: 'FILTER_STATUS_FIRE',
    }
}

export const filterStatusWater = () => {
    return {
        type: 'FILTER_STATUS_WATER',
    }
}

export const filterStatusWind = () => {
    return {
        type: 'FILTER_STATUS_WIND',
    }
}

export const filterStatusEarth = () => {
    return {
        type: 'FILTER_STATUS_EARTH',
    }
}