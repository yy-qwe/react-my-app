/*
 * @Author: your name
 * @Date: 2021-06-26 15:36:24
 * @LastEditTime: 2021-06-26 18:55:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\my-app\src\views\Home.js
 */
import React, { useState } from 'react';
import {
    Link,
    useRouteMatch
} from "react-router-dom";
import { connect } from 'react-redux'
// connect 将state和dispatch集成到props
function Home(props) {
    console.log('Home props', props);
    console.log('Home useRouteMatch', useRouteMatch());
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Home</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <div>
                <p>
                    <Link to='/about'>Go About</Link>
                </p>
                <p>
                    <Link to='/about/myDog'>Go myDog</Link>
                </p>
            </div>
            <div onClick={props.onTodoClick}>
                onTodoClick
            </div>

        </div>
    );
}
const mapStateToProps = state => {
    return {
        visibilityFilter: state.visibilityFilter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: 'SHOW_COMPLETED'
            })
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)