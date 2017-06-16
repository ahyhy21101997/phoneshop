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
        var producer = this.props.producer
        if (item.model) {
            if (item.isHot == true && (producer == "hot" || producer == "tatca")) {
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
        var { title,
            producers,
            productData,
            onChangeProductType,
             } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity>
                            <Text style={styles.headerTitle}>{title}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row' }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            {
                                producers.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={item.type} onPress={() => onChangeProductType(item.type)}>
                                            <Text style={styles.headerContent}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                            <TouchableOpacity>
                                <Text style={styles.headerContent}>Thêm >></Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.wrapper}>
                    <FlatList
                        data={productData}
                        extraData={this.props}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={this.__keyExtractor}
                        renderItem={this._renderItem}
                        initialNumToRender={1}
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