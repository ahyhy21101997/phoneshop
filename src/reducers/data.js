import Banner1 from '../public/images/banner1.png'
import Banner2 from '../public/images/banner2.png'
import Banner3 from '../public/images/banner3.png'
import Banner4 from '../public/images/banner4.png'

import HotPhone1 from '../public/images/hotphone1.png'
import HotPhone2 from '../public/images/hotphone2.png'

var initialState = {
    banner: [
        { image: Banner1, type: "phone", producer: "htc" },
        { image: Banner2, type: "phone", producer: "samsung" },
        { image: Banner3, type: "phone", producer: "sony" },
        { image: Banner4, type: "phone", producer: "oppo" },
    ],
    hotphone: [
        { image: HotPhone1, phone: 'iphone6plus' },
        { image: HotPhone2, phone: 'iphone6splus' },
        { image: HotPhone2, phone: 'iphone5s' },
        { image: HotPhone2, phone: 'huaweiy52017' },
        { image: HotPhone2, phone: 'vivov5' },
    ],
    phone: [
        modelSelected = "",
        { image: "", name: "Iphone 6s Plus", color: "white", producer: "apple", price: "11,000,000", model: "6splus" },
        { image: "", name: "Iphone 7s Plus", color: "black", producer: "apple", price: "17,000,000", model: "7splus" },
        { image: "", name: "Samsung galaxy S8 Edge", color: "", producer: "samsung", price: "11,000,000", model: "s8e" },
        { image: "", name: "Samsung galaxy S7 Edge", color: "", producer: "samsung", price: "11,000,000", model: "s7e" },
        { image: "", name: "Oppo F900", color: "pink", producer: "oppo", price: "5,000,000", model: "oppof900" },
        { image: "", name: "Oppo F1 Selfi", color: "white", producer: "oppo", price: "7,000,000", model: "oppof1" },

    ]
}

import * as config from '../actions/config'

const data = (state = initialState, action) => {
    switch (action.type) {
        case config.UPDATE_DATA:
            return Object.assign({}, state, action.newHomeData)
        default:
            return state
    }
}

export default data