# vue-input-binding

[![npm (scoped)](https://img.shields.io/npm/v/@sensorskit/vue-input-binding.svg)](https://www.npmjs.com/package/@sensorskit/vue-input-binding)
 [![Build Status](https://travis-ci.org/SensorsKit/vue-input-binding.svg?branch=master)](https://travis-ci.org/SensorsKit/vue-input-binding)

[[在线预览]](https://sensorskit.github.io/vue-input-binding/)

> **用神策追踪输入框的聚焦失焦事件**
>
> |    事件    | 属性 |
> | ---------- | --- |
> | InputFocus |  InputLabel? |
> | InputBlur  |  InputLabel?, StayTime |

## 使用

``` bash
yarn add @sensorskit/vue-input-binding
```

在 Vue.js 项目的入口处引入：

```js
import VueInputBinding from '@sensorskit/vue-input-binding'

Vue.use(VueInputBinding)

// 如果需要自定义选项
Vue.use(VueInputBinding, {
  sa: window.sa // 神策 JS SDK 暴露的全局变量
})
```

## 自动触发神策事件

在需要自动触发聚焦失焦事件的地方引入自定义指令：

```html
<!-- 此时会自动触发神策的聚焦失焦事件，并带上必要属性，需要在引入时配置 sa 全局变量 -->
<input type="text" data-label="手机号" v-sa-track>
```

如果在元素上设置了 `data-label` 属性，触发神策事件时会自动带上 InputLabel 属性。

## 手动触发神策事件

如果需要自行处理聚焦失焦逻辑：

```html
<input type="text" v-on-focus="onFocus" v-on-blur="onBlur">
```

此时，数据框聚焦时会触发 onFocus 方法，失焦时会触发 onBlur 方法，onBlur 会接收一个参数：

```js
export default {
  ...

  methods: {
    onFocus() {
      sa.track('InputFocus', { ...your custom properties })
    },

    // onBlur 接收一个 Object 参数，里面包含距离上次聚焦的停留时间：StayTime
    onBlur({ StayTime }) {
      sa.track('InputBlur', {
        ...your custom properties,
        StayTime
      })
    }
  }
}
```
