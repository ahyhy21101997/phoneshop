import React, { Component } from 'react'
import { Picker } from 'native-base'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import ProductCard from '../../Components/ProductCard'

export default class DevicePage extends Component {
    _renderItem = ({ item }) => {
        let producer = this.props.producer
        if (producer == 'hot' || producer == 'tatca') {
            return (
                <ProductCard
                    model={item.model}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                />
            )
        } else {
            if (producer == item.producer) {
                return (
                    <ProductCard
                        model={item.model}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                )
            }
        }
    }
    __keyExtractor = (item, index) => (item.model) ? item.model : null

    render() {
        let { producers, data, onChangeProducer, producer } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.producer}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ color: 'black', fontSize: height * 0.025 }}>Chọn nhà sản xuất:</Text>
                        </View>
                        <View style={{ flex: 1.5 }}>
                            <Picker
                                onValueChange={(value) => {
                                    onChangeProducer(value);
                                }}
                                selectedValue={producer}
                                supportedOrientations={['portrait', 'landscape']}
                                iosHeader="Chọn hãng sản xuất"
                                mode="dropdown"
                            >
                                {
                                    producers.map((item, index) => {
                                        return (
                                            <Picker.Item label={item.name} value={item.value} key={item.value} />
                                        )
                                    })
                                }
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <FlatList
                        data={data}
                        extraData={this.props}
                        numColumns={2}
                        renderItem={this._renderItem}
                        keyExtractor={this.__keyExtractor}
                        initialNumToRender={2}
                    />
                </View>
            </View>
        )
    }
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
    },

    header: {
        height: height * 0.06,
    },
    producer: {
        padding: 5,
        height: height * 0.06,
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'

    },

    content: {
        padding: 2,
        height: height - (height * 0.2) - (height * 0.06),
    }
})