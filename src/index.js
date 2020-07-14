import React from "react";
import reactDom from "react-dom"
import GoogleOAuth from "../src/googleOAuth";

class Index extends React.Component{
    render() {
        return (
            <div>
                <GoogleOAuth></GoogleOAuth>
            </div>
        );
    }
}

reactDom.render(<Index></Index>, document.getElementById('root'))
