import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import routes from './src/config/routes';
const AppNav = StackNavigator(routes)

const initialState = AppNav.router.getStateForAction(AppNav.router.getActionForPathAndParams('Main'));
// lấy reducer của thằng nav
const navReducer = (state = initialState, action) => {
    const nextState = AppNav.router.getStateForAction(action, state);
    return nextState || state;
}

//combine tất cả reducer 
import reducers from './src/reducers/index'
const appReducer = combineReducers(Object.assign({}, {
    nav: navReducer,
}, reducers));

class AppNavigator extends Component {
    render() {
        return (
            <AppNav
                navigation={
                    addNavigationHelpers({
                        dispatch: this.props.dispatch,
                        state: this.props.nav
                    })
                }
            />
        )
    }
}

// khai báo gán state vào props
const mapStateToProps = (state) => ({
    nav: state.nav
})
// thực hiện việc gán
const AppWithNavigationState = connect(mapStateToProps)(AppNavigator)

//tạo store từ mấy cái đó
const store = createStore(appReducer)

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                    <AppWithNavigationState />
            </Provider>
        )
    }
}
