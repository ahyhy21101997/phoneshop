import Main from '../Containers/Main'
import ProductInfo from '../Containers/ProductInfo'

const routes = {
    Main: { screen: Main },
    ProductInfo: {
        screen: ProductInfo,
        navigationOptions: ({ navigation }) => ({
            title: `Thông tin sản phẩm`,
            headerStyle: {backgroundColor: '#E0052B'},
            headerTitleStyle: {color: 'white'},
        }),
    }
}
export default routes