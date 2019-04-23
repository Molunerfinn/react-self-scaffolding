import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import { bindActionCreators, Dispatch } from 'redux'

interface ActionPropsClass {
  list: any[]
  actions: actions.actionsType
}

const mapStateToProps = (state: any) => ({
  list: state.list
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

class Home extends Component<ActionPropsClass> {
  addList = () => {
    this.props.actions.getUserInfo([
      {
        id: 1
      },
      {
        id: 2
      }
    ])
  }
  render () {
    const { list } = this.props
    return (
      <>
        <div onClick={this.addList}>Home</div>
        {list.map((item: any) => (
          <div key={item.id}>
            {item.id}
          </div>
        ))}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
