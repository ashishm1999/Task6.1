import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class Toast extends Component {
  state = { visible: true }

  render() {
    if (this.state.visible) {
      return (
        <Message
          header='Login Error'
          content='No user exist, Please SignUp'
        />
      )
    }
  }
}

export default Toast