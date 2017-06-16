import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';

export default class ProductInfo extends Component {

    render() {
        var { name, price, image, model } = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <ScrollView >
                        <View style={styles.title}>
                            <Text style={styles.name}>Tên: {name}</Text>
                            <Text style={styles.price}>Giá: {price} VNĐ</Text>
                        </View>

                        <View style={styles.imageWrapper}>
                            <Text>Hình ảnh: </Text>
                            <Image style={styles.image} source={image} />
                        </View>
                        <View style={styles.infoWrapper}>
                            <Text style={styles.infoTitle}> Ưu đãi mua hàng: </Text>
                            <Text>* Dán màn hình cả năm chỉ từ 69.000đ (Chi tiết)</Text>
                            <Text>* Giảm giá thêm tới 15% giá phụ kiện, 1% giá máy cho hội viên Smember (Chi tiết)</Text>
                            <Text>* Trả góp lãi suât 0% với thẻ tín dụng ANZ, Sacombank, Nam Á Bank, Shinhanbank (Chi tiết)</Text>
                            <Text>* Miễn phí cà thẻ (ngoại trừ AMEX, UnionPay & JCB)</Text>

                        </View>
                        <View style={styles.infoWrapper}>
                            <Text style={styles.infoTitle}>Bảo hành</Text>
                            <Text>Bảo hành 1 đổi 1 trong 12 tháng (cả lỗi nguồn, màn hình)</Text>
                            <Text style={styles.infoTitle}>Bảo hành mở rộng</Text>
                            <Text style={styles.infoTitle}>Tình trạng</Text>
                            <Text>Máy mới nguyên hộp, IMEI trùng hộp</Text>
                            <Text style={styles.infoTitle}>Vận chuyển</Text>
                            <Text>Miễn phí giao hàng, thu tiền tại nhà (Chi tiết)</Text>
                        </View>
                        <View style={styles.infoWrapper}>
                            <Text style={styles.infoTitle}>THÔNG TIN CHI TIẾT</Text>
                            <Text style={styles.infoTitle}>3G:</Text><Text>HSPA 42.2/5.76 Mbps, EV-DO Rev.A 3.1 Mbps</Text>
                            <Text style={styles.infoTitle}>4G:</Text><Text>LTE Cat9 450/50 Mbps</Text>
                            <Text style={styles.infoTitle}>SIM:</Text><Text>Nano-SIM</Text>
                            <Text style={styles.infoTitle}>Kích thước:</Text><Text>138.3 x 67.1 x 7.1 mm (5.44 x 2.64 x 0.28 in)</Text>
                            <Text style={styles.infoTitle}>Trọng lượng:</Text><Text>138 g (4.87 oz)</Text>
                            <Text style={styles.infoTitle}>Màn hình:</Text><Text>Cảm ứng điện dung LED-backlit IPS LCD, 16 triệu màu</Text>
                            <Text style={styles.infoTitle}>Kích thước màn hình:</Text><Text>750 x 1334 pixels, 4.7 inches (~326 ppi mật độ điểm ảnh)</Text>
                            <Text style={styles.infoTitle}>Bộ nhớ trong:</Text><Text>128 GB, 2 GB RAM</Text>
                            <Text style={styles.infoTitle}>Khe cắm thẻ nhớ:</Text><Text>Không</Text>
                            <Text style={styles.infoTitle}>WLAN:</Text><Text>Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot</Text>
                            <Text style={styles.infoTitle}>Bluetooth:</Text><Text>v4.2, A2DP, LE</Text>
                            <Text style={styles.infoTitle}>USB:</Text><Text>v2.0, kết nối đảo chiều</Text>
                            <Text style={styles.infoTitle}>NFC:</Text><Text>Chỉ sử dụng Apple Pay</Text>
                            <Text style={styles.infoTitle}>GPS:</Text><Text>A-GPS, GLONASS</Text>
                            <Text style={styles.infoTitle}>Hệ điều hành:</Text><Text>iOS 10.0.1</Text>
                            <Text style={styles.infoTitle}>Chipset:</Text><Text>Apple A10 Fusion APL1W24</Text>
                            <Text style={styles.infoTitle}>CPU:</Text><Text>Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)</Text>
                            <Text style={styles.infoTitle}>GPU:</Text><Text>PowerVR Series7XT Plus (6 lõi đồ họa)</Text>
                            <Text style={styles.infoTitle}>Bộ cảm biến:</Text><Text>Vân tay, gia tốc, la bàn, khoảng cách, con quay quy hồi, phong vũ biểu</Text>
                            <Text style={styles.infoTitle}>Camera chính:</Text><Text>12 MP, f/1.8, tự động lấy nét nhận diện theo giai đoạn, OIS, 4 LED flash (2 tone)</Text>
                            <Text style={styles.infoTitle}>Camera phụ:</Text><Text>7 MP, f/2.2, 1080p@30fps, 720p@240fps, nhận diện khuôn mặt, HDR, panorama</Text>
                            <Text style={styles.infoTitle}>Video:</Text><Text>2160p@30fps, 1080p@30/60/120fps, 720p@240fps</Text>
                            <Text style={styles.infoTitle}>Pin:</Text><Text>Li-Ion 1960 mAh</Text>
                            <Text style={styles.infoTitle}>Thời gian đàm thoại:</Text><Text>14 giờ (3G)</Text>
                            <Text style={styles.infoTitle}>Thời gian chờ:</Text><Text>240 giờ</Text >
                            <Text style={styles.infoTitle}>Thời gian chơi nhạc:</Text><Text>40 giờ (không dây)</Text >
                        </View >
                    </ScrollView >
                </View >
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.buttonBuy1}>
                        <Text style={styles.buyTitle}>Mua Nhanh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBuy2}>
                        <Text style={styles.buyTitle}>Mua Trả Góp</Text>
                    </TouchableOpacity>
                </View>

            </View >
        )
    }
}
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 9,
        padding: 5,
        paddingBottom: 0,
    },
    title: {
        paddingLeft: height * 0.05,
        backgroundColor: 'white',
        borderRadius: 3,
    },
    name: {
        fontSize: height * 0.032,
        color: 'black'
    },
    price: {
        fontSize: height * 0.03,
        color: '#E0052B'
    },
    image: {
        height: height * 0.5,
        width: height * 0.25
    },
    imageWrapper: {
        marginTop: 2,
        padding: 5,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    infoWrapper: {
        marginTop: 2,
        padding: 5,
        borderRadius: 3,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    infoTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: height * 0.02
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    buttonBuy1: {
        flex: 1,
        backgroundColor: '#F21136',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 1,
    },
    buttonBuy2: {
        flex: 1,
        backgroundColor: '#39D37B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 1,
    },
    buyTitle: {
        color: 'white',
        fontSize: height * 0.03,
        fontWeight: 'bold'
    }
})