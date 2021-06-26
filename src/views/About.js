/*
 * @Author: your name
 * @Date: 2021-06-26 15:36:10
 * @LastEditTime: 2021-06-26 18:55:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\my-app\src\views\About.js
 */
import React, { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";
import MyDog from "./MyDog";
import MyDog2 from "./MyDog2";
export default function About(props) {
    console.log('about props', props);
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('about count useEffect');

    });
    const [name, setName] = useState('a');
    useEffect(() => {
        console.log('about name useEffect');

    });
    function goUser() {
        props.history.push('/user/123')
    }

    function changeAboutState() {
        console.log('111');

        setCount(count + 1)
    }
    return (
        <div>
            <p>About</p>
            <div>
                <p><Link to='/user'>Go User</Link></p>
                <p onClick={goUser}>Go User123</p>
            </div>
            <button onClick={() => setCount(count + 1)}>
                Click me,change about count
            </button>
            <button onClick={() => setName('b')}>
                Click me,change about name{name}
            </button>
            <div>
                {/* 想要mydog获取router信息，用withorouter包裹mydog，集成到props */}
                <MyDog aboutState={count} changeAboutCount={changeAboutState}></MyDog>
                <MyDog2 aboutState={count}></MyDog2>
            </div>
        </div>
    );
}
