import React, { Component } from 'react'
import {
    ScrollView,
    Dimensions
} from 'react-native'
import { connect } from 'react-redux'

//action
import { changePhoneProducer, changeTabletProducer } from '../../actions/data'

import Banner from '../../Components/Home/Banner'
import ProductSlideShow from '../../Components/Home/ProductSlideShow'

const { width, height } = Dimensions.get('window')
class Home extends Component {
    render() {
        return (
            <ScrollView
                style={{ height: height - (height * 0.2) }}
                showsVerticalScrollIndicator={false}
            >
                <Banner bannerData={this.props.bannerData} />

                <ProductSlideShow
                    title={"Điện Thoại"}
                    productData={this.props.phoneData}
                    producer={this.props.phoneProducer}
                    onChangeProductType={this.props.onChangePhoneProducer}
                    producers={[
                        { type: "hot", name: "hot" },
                        { type: "apple", name: "iPhone" },
                        { type: "samsung", name: 'Samsung' },
                        { type: "sony", name: "Sony" },
                        { type: "oppo", name: "Oppo" }
                    ]}

                />
                <ProductSlideShow
                    title={"Máy Tính Bảng"}
                    productData={this.props.tabletData}
                    producer={this.props.tabletProducer}
                    onChangeProductType={this.props.onChangeTabletProducer}
                    producers={[
                        { type: "hot", name: "hot" },
                        { type: "apple", name: "iPad" }
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
        phoneProducer: state.data.phoneProducer,

        tabletData: state.data.tablet,
        tabletProducer: state.data.tabletProducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangePhoneProducer: (producer) => {
            dispatch(changePhoneProducer(producer))
        },
        onChangeTabletProducer: (producer) => {
            dispatch(changeTabletProducer(producer))
        }
    }
}

const HomeWithState = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeWithState