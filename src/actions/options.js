import * as config from './config.js'

export const changePosition = (position) => {
    return {
        type: config.CHANGE_POSITION,
        position
    }
}

export const changePage = (page) => {
    return {
        type: config.CHANGE_PAGE,
        page
    }
}