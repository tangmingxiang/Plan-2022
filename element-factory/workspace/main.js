import { createApp } from 'vue'
// import Delegator from './app.tpl'
import Delegator from './card.tpl'
import data from './data/data.mjs'

// function createApp(rootComponent: Component, rootProps?: object): App
// 第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props。
const app = createApp(Delegator, data.data.result[0])
// const app = createApp(Delegator, data.data) // data.data 通过 app.tpl 传给了 list 组件中的 props.result (data.data 中有 result 字段的定义)
app.mount('#app')
