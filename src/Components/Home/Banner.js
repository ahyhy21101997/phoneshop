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
                    width={width}
                    height={height * 0.3}
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
        marginTop: 5
    },
    bannerImage: {
        width: width,
        height: height * 0.3,
    }
})