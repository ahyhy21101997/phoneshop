import React, { Component } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import Home from './MainContainer/Home'

class MainContainer extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Home />
            </View>
        )
    }
}

export default MainContainer

var styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        padding: 5,
    }
})