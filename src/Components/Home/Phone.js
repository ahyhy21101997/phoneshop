import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native'

export default class Phone extends Component {
    _renderItem = ({ item }) => {
        var producer = this.props.phoneShow
        if (item.model) {
            if (item.isHot == true && producer == "hot") {
                return (
                    <TouchableOpacity key={item.model} >
                        <View style={styles.productWraper}>
                            <Image style={styles.productImage} source={item.image} />
                            <View style={styles.productTitle}>
                                <Text style={{ height: hs * 0.05, fontSize: hs * 0.02, fontWeight: 'bold' }}>{item.name}</Text>
                                <Text style={{ height: hs * 0.023, fontSize: hs * 0.02 }}>{item.price} VNĐ</Text>
                            </View>
                        </View>
                    </TouchableOpacity >
                )
            } else if (item.producer == producer) {
                return (
                    <TouchableOpacity key={item.model} >
                        <View style={styles.productWraper}>
                            <Image style={styles.productImage} source={item.image} />
                            <View style={styles.productTitle}>
                                <Text style={{ height: hs * 0.05, fontSize: hs * 0.02, fontWeight: 'bold' }}>{item.name}</Text>
                                <Text style={{ height: hs * 0.023, fontSize: hs * 0.02 }}>{item.price} VNĐ</Text>
                            </View>
                        </View>
                    </TouchableOpacity >
                )
            }
        }
    }
    __keyExtractor = (item, index) => (item.model) ? item.model : null
    render() {
        var { phoneData, onChangePhoneShow } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity>
                            <Text style={styles.headerTitle}>Điện Thoại</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row' }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >   
                            <TouchableOpacity onPress={() => onChangePhoneShow("hot")}>
                                <Text style={styles.headerContent}>Hot</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onChangePhoneShow('apple')}>
                                <Text style={styles.headerContent}>Iphone</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onChangePhoneShow('samsung')}>
                                <Text style={styles.headerContent}>Samsung</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onChangePhoneShow('sony')}>
                                <Text style={styles.headerContent}>Sony</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onChangePhoneShow('oppo')}>
                                <Text style={styles.headerContent}>Oppo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.headerContent}>Thêm >></Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.wrapper}>
                    <FlatList
                        data={phoneData}
                        extraData={this.props}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={this.__keyExtractor}
                        renderItem={this._renderItem}
                    />
                </View>
            </View >
        )
    }
}

const { height, width } = Dimensions.get('window')
const hs = Dimensions.get('screen').height,
    ws = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        height: height * 0.45,
    },
    header: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0052B',
        flexDirection: 'row'
    },
    headerTitle: {
        color: 'white',
        fontSize: hs * 0.025,
        fontWeight: 'bold',
    },
    headerContent: {
        color: 'white',
        fontSize: hs * 0.02,
        fontWeight: 'bold',
        margin: hs * 0.01,
    },
    wrapper: {
        flex: 5,
        justifyContent: 'space-between'
    },
    productWraper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: 5,
        margin: 2,
        padding: 2,
        width: hs * 0.21,
        height: hs * 0.35,
    },
    productImage: {
        width: hs * 0.13,
        height: hs * 0.23,
    },
    productTitle: {
        padding: 10,
        width: hs * 0.21,
        alignItems: 'center',
        justifyContent: 'center'
    },

})