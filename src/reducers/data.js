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

import Ipad1 from '../public/images/product/ipad/ipadairgray12.jpg'
import Ipad2 from '../public/images/product/ipad/ipadgold.jpg'
import Ipad3 from '../public/images/product/ipad/ipadpropink.jpg'

var initialState = {
    banner: [
        { image: Banner1, type: "phone", producer: "htc" },
        { image: Banner2, type: "phone", producer: "samsung" },
        { image: Banner3, type: "phone", producer: "sony" },
        { image: Banner4, type: "phone", producer: "oppo" },
    ],
    phoneProducer: 'hot',
    phone: [
        { image: Phone1, name: "Iphone 6s Plus", color: "white", producer: "apple", price: "11,000,000", model: "6splus", isHot: true },
        { image: Phone2, name: "Iphone 7s Plus", color: "black", producer: "apple", price: "17,000,000", model: "7splus", isHot: true },
        { image: Phone3, name: "Samsung galaxy S8 Edge", color: "", producer: "samsung", price: "11,000,000", model: "s8e", isHot: true },
        { image: Phone4, name: "Samsung galaxy S7 Edge", color: "", producer: "samsung", price: "11,000,000", model: "s7e", isHot: true },
        { image: Phone5, name: "Oppo F900", color: "pink", producer: "oppo", price: "5,000,000", model: "oppof900", isHot: false },
        { image: Phone6, name: "Oppo F1 Selfi", color: "white", producer: "oppo", price: "7,000,000", model: "oppof1", isHot: true },
    ],
    tabletProducer: 'hot',
    tablet: [
        {image: Ipad1, name:"Ipad Air Pro 11", color: "white", producer: "apple", price: "11,000,000", model: "ipadairgray12", isHot: true},
        {image: Ipad2, name:"Ipad Wifi 9.4 Gold", color: "gold", producer: "apple", price: "15,000,000", model: "ipad Gold", isHot: false},
        {image: Ipad3, name:"Ipad Pro Pink 12", color: "pink", producer: "apple", price: "19,000,000", model: "ipadpropink", isHot: true},
    ]
}

import * as config from '../actions/config'

const data = (state = initialState, action) => {
    switch (action.type) {
        case config.UPDATE_DATA:
            return Object.assign({}, state, action.newHomeData)
        case config.CHANGE_PHONE_PRODUCER:
            return Object.assign({}, state, {
                phoneProducer: action.producer
            })
        case config.CHANGE_TABLET_PRODUCER:
            return Object.assign({}, state, {
                tabletProducer : action.producer
            })
        default:
            return state
    }
}

export default data