import produce from 'immer'
import * as propTypes from './propTypes'

const reducer = (cases: propTypes.Cases = {}, defaultState = { list: [] }) => (
  state = defaultState,
  action: propTypes.Action
) =>
  produce(state, draft => {
    if (action && action.type && cases[action.type] instanceof Function) {
      cases[action.type](draft, action.payload)
    }
  })

export default reducer
