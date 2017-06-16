import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native'
import { Picker } from 'native-base'

//image
import SearchIcon from '../public/icons/search.png'
import Logo from '../public/images/logo.png'



export default class Header extends Component {
    render() {
        var { selectedPosition,
            onChangePosition,
            selectedPage,
            onChangePage } = this.props;
        return (
            <View style={styles.container}>

                <View style={styles.optionBar}>
                    <View style={styles.logo}>
                        <Image style={styles.logoIcon} source={Logo} />
                    </View>
                    <View style={styles.posPicker}>
                        <Picker
                            onValueChange={(value) => {
                                onChangePosition(value);
                            }}
                            selectedValue={selectedPosition}
                            supportedOrientations={['portrait', 'landscape']}
                            iosHeader="Chọn Vùng"
                            mode="dropdown">
                            <Picker.Item label="TP Hồ Chí Minh" value="hcm" />
                            <Picker.Item label="Hà Nội" value="hn" />
                        </Picker>
                    </View>
                    <View style={styles.catePicker}>
                        <Picker
                            onValueChange={(value) => {
                                onChangePage(value);
                            }}
                            selectedValue={selectedPage}
                            supportedOrientations={['portrait', 'landscape']}
                            iosHeader="Chọn trang"
                            mode="dropdown">
                            <Picker.Item label="Trang Chủ" value="trangchu" />
                            <Picker.Item label="Điện thoại" value="dienthoai" />
                            <Picker.Item label="Máy tính bảng" value="maytinhbang" />
                            <Picker.Item label="Phụ kiện" value="phukien" />
                            <Picker.Item label="Trả góp" value="tragop" />
                            <Picker.Item label="Hàng Cũ" value="hangcu" />
                            <Picker.Item label="Sắp về" value="sapve" />
                            <Picker.Item label="Sửa chữa" value="suachua" />
                            <Picker.Item label="Khuyến mãi" value="khuyenmai" />
                            <Picker.Item label="Smember" value="smember" />
                            <Picker.Item label="Sforum" value="sforum" />
                        </Picker>
                    </View>
                </View>

                <TouchableOpacity style={styles.searchBar}>
                    <View style={styles.searchButton} >
                        <Image style={styles.searchButtonIcon} source={SearchIcon} />
                    </View>
                    <TextInput
                        style={styles.searchBarInput}
                        placeholder='Tìm kiếm sản phẩm'
                        underlineColorAndroid='transparent'
                    />
                </TouchableOpacity>

            </View >
        )
    }
}
const { height, width } = Dimensions.get('window')
var styles = StyleSheet.create({
    container: {
        padding: 5,
        height: height * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0052B'
    },

    optionBar: {
        paddingBottom: 5,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoIcon: {
        width: width * 0.08,
        height: height * 0.05,
    },
    posPicker: {
        flex: 3,
        marginLeft: 5,
        borderRadius: 3,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    catePicker: {
        flex: 3,
        marginLeft: 5,
        borderRadius: 3,
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    searchBar: {
        paddingLeft: 30,
        flex: 1,
        borderRadius: 3,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    searchBarInput: {
        flex: 8
    },
    searchButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButtonIcon: {
        width: 30,
        height: 30,
    }
})