import React, { Component } from 'react'
import {
    ScrollView,
    Dimensions
} from 'react-native'
import { connect } from 'react-redux'

//action
import { changePhoneShow } from '../../actions/data'

import Banner from '../../Components/Home/Banner'
import Phone from '../../Components/Home/Phone'
import ProductSlideShow from '../../Components/Home/ProductSlideShow'

const { width, height } = Dimensions.get('window')
class Home extends Component {
    render() {
        return (
            <ScrollView
                style={{ height: height - 120 }}
                showsVerticalScrollIndicator={false}
            >
                <Banner bannerData={this.props.bannerData} />

                <ProductSlideShow
                    title={"Điện Thoại"}
                    productData={this.props.phoneData}
                    producer={this.props.phoneShow}
                    onChangeProductType={this.props.onChangePhoneShow}
                    producers={[
                        { type: "hot", name: "hot" },
                        { type: "apple", name: "iPhone" },
                        { type: "samsung", name: 'Samsung' },
                        { type: "sony", name: "Sony" },
                        { type: "oppo", name: "Oppo" }

                    ]}

                />
                
            </ScrollView>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        bannerData: state.data.banner,
        phoneData: state.data.phone,
        phoneShow: state.data.phoneShow
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangePhoneShow: (value) => {
            dispatch(changePhoneShow(value))
        }
    }
}

const HomeWithState = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeWithState