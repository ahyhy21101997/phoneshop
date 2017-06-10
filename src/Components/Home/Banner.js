import React, { Component } from 'react'
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
} from 'react-native'
import Swiper from 'react-native-swiper'

class Banner extends Component {
    render() {
        var { bannerData } = this.props
        return (
            <View style={styles.container}>
                <Swiper
                    autoplay={true}
                    autoplayTimeout={4}
                    width={width - 10}
                    height={175}
                    activeDotColor='#E0052B'
                >
                    {
                        bannerData.map((item, index) => {
                            return (
                                <TouchableHighlight
                                    key={index}>
                                    <Image style={styles.bannerImage} source={item.image} />
                                </TouchableHighlight>
                            )
                        })
                    }
                </Swiper>
            </View >
        )
    }
}

export default Banner

const { width, height } = Dimensions.get('window')
var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
    },
    bannerImage: {
        width: width - 10,
        height: 175
    }
})