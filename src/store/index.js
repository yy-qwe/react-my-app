/*
 * @Author: your name
 * @Date: 2021-06-26 15:17:10
 * @LastEditTime: 2021-06-26 15:42:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\my-app\src\store\index.js
 */
import { createStore } from 'redux'
import todoApp from "./todo";
const store = createStore(todoApp)
export default store