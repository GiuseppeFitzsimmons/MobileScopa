import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../action';

//export default class Login extends React.Component {
class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                Hello, this is the login screen
                <Button
                    onClick = {()=>
                        this.props.login()
                    }
                >
                    Login
                </Button>
            </div>

        )
    }
}

function mapStateToProps(state, props) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

//connect(mapStateToProps, mapDispatchToProps)(Login)

export default connect(mapStateToProps, mapDispatchToProps)(Login)