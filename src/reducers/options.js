import * as config from '../actions/config'

const initialState = {
    position: 'hcm',
    page: 'dienthoai'
}
const options = (state = initialState, action) => {
    switch (action.type) {
        case config.CHANGE_POSITION:
            return Object.assign({}, state, {
                position: action.position
            })
        case config.CHANGE_PAGE:
            return Object.assign({}, state, {
                page: action.page
            })
        default:
            return state

    }
}

export default options