import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Home from './MainContainer/Home'

class MainContainer extends Component {

    render() {
        let show = null
        switch (this.props.page) {
            case 'trangchu':
                show = <Home />
                break
            case 'dienthoai':
                show = null
                break
            default:
                show = null

        }
        return (
            <View style={styles.container} >
                {show}
            </View>
        )
    }
}

export default MainContainer

var styles = StyleSheet.create({
    container: {
    }
})