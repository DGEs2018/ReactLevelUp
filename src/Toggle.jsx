import React, { Component } from 'react';

export default class Toggle extends Component {
    state = {
        on: false,
        off: true
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render() {
        return (
            <div>
                {this.state.on && this.props.children}
                <button onClick={this.toggle}>Show - Hide Toggler</button>
            </div>
        )
    }
}
