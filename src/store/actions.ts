import * as types from './constants'
export const getUserInfo = (list: []) => {
  return {
    type: types.GET_USER_INFO,
    payload: list
  }
}

export interface actionsType {
  getUserInfo: Function
}
