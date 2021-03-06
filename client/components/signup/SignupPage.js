import React, { Component } from 'react'
import { connect } from 'react-redux'

import { userSignupRequest } from '../../actions/signupActions'
import { addFlashMessage } from '../../actions/flashMessages'
import SignupForm from './SignupForm'

class SignupPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm 
            userSignupRequest={this.props.userSignupRequest} 
            addFlashMessage={this.props.addFlashMessage}
          />
        </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage)