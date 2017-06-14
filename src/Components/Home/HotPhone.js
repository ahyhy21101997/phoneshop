import React, { Component } from 'react'
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
} from 'react-native'
import Swiper from 'react-native-swiper'

class HotPhone extends Component {
    render() {
        var { hotPhoneData } = this.props
        return (
            <View style={styles.container}>
                <Swiper
                    autoplay={true}
                    autoplayTimeout={7}
                    width={width}
                    height={200}
                    activeDotColor='#E0052B'
                >
                    {
                        hotPhoneData.map((item, index) => {
                            return (
                                <TouchableHighlight
                                    key={index}>
                                    <Image style={styles.bannerImage} source={item.image} />
                                </TouchableHighlight>
                            )
                        })
                    }
                </Swiper>
            </View>
        )
    }
}

export default HotPhone

const { width, height } = Dimensions.get('window')
var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bannerImage: {
        width: width,
        height: 200,
    }
})