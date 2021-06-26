/*
 * @Author: your name
 * @Date: 2021-06-26 15:36:10
 * @LastEditTime: 2021-06-26 18:53:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\my-app\src\views\About.js
 */
import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
function MyDog(props) {
    console.log('myDog渲染 props', props);
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('MyDog useEffect', props.aboutState);
        console.log('dog 已更新', dog);
    });
    const [dog, setDog] = useState({
        name: 'a',
        age: 2
    });
    function changeDog() {
        setDog({ name: 'b' })
        console.log('dog 没有更新', dog);
    }
    return (
        <div>
            <p>this is myDog，aboutState:{props.aboutState},You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <div onClick={props.changeAboutCount}>changeAboutCount</div>
            <div onClick={changeDog}>changeDog</div>

        </div>
    );
}
export default withRouter(MyDog)