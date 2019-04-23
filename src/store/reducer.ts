import createReducer from './createReducer'
import * as types from './constants'
import * as propTypes from './propTypes'

const reducer = createReducer({
  [types.GET_USER_INFO]: (draft: propTypes.Action, payload: any) => {
    draft.list = payload
  }
})

export default reducer
