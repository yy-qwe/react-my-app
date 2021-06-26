/*
 * @Author: your name
 * @Date: 2021-06-26 15:36:10
 * @LastEditTime: 2021-06-26 15:56:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\my-app\src\views\About.js
 */
import React, { useState } from 'react';
export default function User(props) {
    console.log('user props', props);
    const [count, setCount] = useState(0);
    const handleClick = () => {
        props.history.goBack()
    }
    return (
        <div>
            <p>User</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p onClick={handleClick}>
                返回
            </p>
        </div>
    );
}