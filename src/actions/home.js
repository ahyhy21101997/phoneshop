import * as config from './config'

export const updateHomeData = (newHomeData) => {
    return {
        type: config.UPDATE_DATA,
        newHomeData
    }
}