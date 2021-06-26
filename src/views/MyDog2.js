/*
 * @Author: your name
 * @Date: 2021-06-26 15:36:10
 * @LastEditTime: 2021-06-26 18:25:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\my-app\src\views\About.js
 */
import React, { Component } from 'react';
export default class MyDog2 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }


    componentDidMount() {
        console.log('MyDog2 componentDidMount', this.props.aboutState);
    }

    componentWillUnmount() {
        console.log('MyDog2 componentWillUnmount', this.props.aboutState);

    }
    componentDidUpdate() {
        console.log('MyDog2 componentDidUpdate', this.props.aboutState);

    }

    render() {
        return (
            <div>
                <p>this is myDog2，You clicked {this.state.count} times</p>
                <button onClick={() => this.setState((state) => {
                    return state.count + 1
                })}>
                    Click me
                </button>
            </div>
        );
    }
}
