import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from '../Components/Header'
import MainContainer from './MainContainer'
import { connect } from 'react-redux'

//action
import { changePosition, changePage } from '../actions/options'

class Home extends Component {
    static navigationOptions = {
        title: null,
        header: null
    }
    render() {
        return (
            <View>
                <Header
                    selectedPosition={this.props.position}
                    onChangePosition={this.props.onChangePosition}
                    selectedPage={this.props.page}
                    onChangePage={this.props.onChangePage}
                />
                <MainContainer />
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
        }
    }
}

const mapStateToProps = (state) => {
    return {
        position: state.options.position,
        page: state.options.page
    }
}

const HomeWithState = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeWithState