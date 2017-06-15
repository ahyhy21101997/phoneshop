import * as config from './config.js'

export const changePhoneProducer = (producer) => {
    return {
        type: config.CHANGE_PHONE_PRODUCER,
        producer,
    }
}

export const changeTabletProducer = (producer) => {
    return {
        type: config.CHANGE_TABLET_PRODUCER,
        producer,
    }
}