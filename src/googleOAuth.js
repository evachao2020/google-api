// 497237547840-q77v098pm9cq3l12lidbpg5g8o5m5eu9.apps.googleusercontent.com

import React, {Component} from "react";

class GoogleOAuth extends Component {

    state = {
        isSignedIn: null,
        userInfo: {
            gid: null,
            email: '',
            username: '',
            photoLink: ''
        }
    }

    renderSignIn = () => {
        const {isSignedIn} =this.state
        if (isSignedIn === true) {
            return <div>
                <button onClick={this.onSignOut}>Sign Out</button>
            </div>
        } else {
            return <div>
                <button onClick={this.onSignIn}>Sign in</button>
            </div>
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {this.renderSignIn()}
            </div>
        );
    }

    componentDidMount() {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id:
                    "497237547840-q77v098pm9cq3l12lidbpg5g8o5m5eu9.apps.googleusercontent.com"
            }).then(() => {
                console.log(window.gapi.auth2.getAuthInstance())
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                })
                this.auth.isSignedIn.listen(() => this.updateAuthStatus())
            })
        })
    }

    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    updateAuthStatus = () => {
        const {WU, Bu, Bd, dL} = this.auth.currentUser.A3.value.Rt
        if(this.auth.isSignedIn.get()) {
            this.setState({
                isSignedIn: this.auth.isSignedIn.get(),
                userInfo: {
                    gid: WU,
                    email: Bu,
                    username: Bd,
                    photoLink: dL
                }
            })
        }else {
            this.setState({
                isSignedIn: this.auth.isSignedIn.get(),
                userInfo: {
                    gid: '',
                    email: '',
                    username: '',
                    photoLink: ''
                }
            })
        }
    }
}

export default GoogleOAuth