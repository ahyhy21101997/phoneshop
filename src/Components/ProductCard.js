import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
} from 'react-native'

export default class ProductCard extends Component {
    render() {
        let { model, name, price, image } = this.props
        return (
            <View style={styles.container}>
                <TouchableHighlight key={model} >
                    <View style={styles.productWraper}>
                        <Image style={styles.productImage} source={image} />
                        <View style={styles.productTitle}>
                            <Text style={{ height: height * 0.057, fontSize: height * 0.022, fontWeight: 'bold' }}>{name}</Text>
                            <Text style={{ height: height * 0.023, fontSize: height * 0.02 }}>{price} VNĐ</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productWraper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 3,
        height: height * 0.4,
        margin: 2
    },
    productImage: {
        width: height * 0.13,
        height: height * 0.26,
    },
    productTitle: {
        padding: 10,
        width: height * 0.25,
        alignItems: 'center',
        justifyContent: 'center'
    }
})