import * as config from './config.js'

export const changePhoneShow = (value) => {
    return {
        type: config.CHANGE_PHONE_SHOW,
        value,
    }
}