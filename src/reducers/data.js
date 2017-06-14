import Banner1 from '../public/images/banner1.png'
import Banner2 from '../public/images/banner2.png'
import Banner3 from '../public/images/banner3.png'
import Banner4 from '../public/images/banner4.png'

import HotPhone1 from '../public/images/hotphone1.png'
import HotPhone2 from '../public/images/hotphone2.png'

import Phone1 from '../public/images/product/iphone/6spluswhite.png'
import Phone2 from '../public/images/product/iphone/7plusblack.png'
import Phone3 from '../public/images/product/oppo/900.png'
import Phone4 from '../public/images/product/oppo/f3_1000.png'
import Phone5 from '../public/images/product/samsung/s7.png'
import Phone6 from '../public/images/product/samsung/s8_gold.png'

var initialState = {
    banner: [
        { image: Banner1, type: "phone", producer: "htc" },
        { image: Banner2, type: "phone", producer: "samsung" },
        { image: Banner3, type: "phone", producer: "sony" },
        { image: Banner4, type: "phone", producer: "oppo" },
    ],
    phoneShow: 'hot',
    phone: [
        { image: Phone1, name: "Iphone 6s Plus", color: "white", producer: "apple", price: "11,000,000", model: "6splus", isHot: true },
        { image: Phone2, name: "Iphone 7s Plus", color: "black", producer: "apple", price: "17,000,000", model: "7splus", isHot: true },
        { image: Phone3, name: "Samsung galaxy S8 Edge", color: "", producer: "samsung", price: "11,000,000", model: "s8e", isHot: true },
        { image: Phone4, name: "Samsung galaxy S7 Edge", color: "", producer: "samsung", price: "11,000,000", model: "s7e", isHot: true },
        { image: Phone5, name: "Oppo F900", color: "pink", producer: "oppo", price: "5,000,000", model: "oppof900", isHot: false },
        { image: Phone6, name: "Oppo F1 Selfi", color: "white", producer: "oppo", price: "7,000,000", model: "oppof1", isHot: true },

    ]
}

import * as config from '../actions/config'

const data = (state = initialState, action) => {
    switch (action.type) {
        case config.UPDATE_DATA:
            return Object.assign({}, state, action.newHomeData)
        case config.CHANGE_PHONE_SHOW:
            return Object.assign({}, state, {
                phoneShow: action.value
            })
        default:
            return state
    }
}

export default data