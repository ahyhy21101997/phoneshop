import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Home from './MainContainer/Home'
import DevicePage from './MainContainer/DevicePage'

class MainContainer extends Component {

    render() {
        let show = null
        switch (this.props.page) {
            case 'trangchu':
                show = <Home />
                break
            case 'dienthoai':
                show = <DevicePage
                    data={this.props.phoneData}
                    producer={this.props.producerChoose}
                    onChangeProducer={this.props.onChangeProducerChoose}
                    producers={[
                        { name: "Tất Cả", value: 'tatca' },
                        { name: "Apple", value: "apple" },
                        { name: "Samsung", value: "samsung" },
                        { name: "Sony", value: "sony" },
                        { name: "Oppo", value: "oppo" }
                    ]}
                />
                break
            case 'maytinhbang':
                show = <DevicePage
                    data={this.props.tabletData}
                    producer={this.props.producerChoose}
                    onChangeProducer={this.props.onChangeProducerChoose}
                    producers={[
                        { name: "Tất Cả", value: 'tatca' },
                        { name: "Apple", value: "apple" },
                        { name: "Samsung", value: "samsung" },
                        { name: "Sony", value: "sony" },
                        { name: "Oppo", value: "oppo" }
                    ]}
                />
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