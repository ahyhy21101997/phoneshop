import React, { Component } from 'react'
import { View } from 'react-native'
import Header from '../Components/Header'
import MainContainer from './MainContainer'
import { connect } from 'react-redux'

//action
import { changePosition, changePage } from '../actions/options'
import { changePhoneProducer, changeTabletProducer, changeProducerChoose } from '../actions/data'

class Main extends Component {
    static navigationOptions = {
        title: null,
        header: null
    }
    render() {
        return (
            <View style={{}}>
                <Header
                    selectedPosition={this.props.position}
                    onChangePosition={this.props.onChangePosition}
                    selectedPage={this.props.page}
                    onChangePage={this.props.onChangePage}
                />
                <MainContainer
                    page={this.props.page}

                    producerChoose={this.props.producerChoose}
                    onChangeProducerChoose={this.props.onChangeProducerChoose}

                    phoneData={this.props.phoneData}
                    tabletData={this.props.tabletData}
                    
                />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangePosition: (position) => {
            dispatch(changePosition(position))
        },
        onChangePage: (page) => {
            dispatch(changePage(page))
        },
        changePhoneProducer: (producer) => {
            dispatch(changePhoneProducer(producer))
        },
        changeTabletProducer: (producer) => {
            dispatch(changeTabletProducer(producer))
        },
        onChangeProducerChoose: (producer) => {
            dispatch(changeProducerChoose(producer))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        position: state.options.position,
        page: state.options.page,

        producerChoose: state.data.producerChoose,

        phoneData: state.data.phone,
        phoneProducer: state.data.phoneProducer,

        tabletData: state.data.tablet,
        tabletProducer: state.data.tabletProducer,
    }
}

const MainWithState = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainWithState