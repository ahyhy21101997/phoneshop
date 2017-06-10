import React, { Component } from 'react'
import {
    View,
    FlatList,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'

import Banner from '../../Components/Home/Banner'
import HotPhone from '../../Components/Home/HotPhone'

class Home extends Component {
    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Banner bannerData={this.props.bannerData} />
                <HotPhone hotPhoneData={this.props.hotPhoneData} />
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bannerData: state.data.banner,
        hotPhoneData: state.data.hotphone
    }
}
const mapDispatchToProps = (dispatch) => {

}

const HomeWithState = connect(mapStateToProps)(Home)

export default HomeWithState