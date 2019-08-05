# v_tart
一个 vue 项目开发前准备

## assets 静态资源

## common 公共
- css/viewport|mixin.less|reset.less|variable.less 媒体查询适配方案|混入|初始化|变量|
- js/rem.js js 移动适配
- mixin
  - pagination.js 分页（加载更多）

## plugin 插件
- vant vant-ui 管理

## request 前后交互
- http.js axios 的二次封装
- api
  - index.js
  - base.js 接口管理
  - ...js 各模块请求

## models 帮助模型
- searchKey.js 搜索

## store vuex 应用
- index.js
- state.js
- getters.js
- mutations-type.js
- mutations.js
- actions.js

## utils 工具 
- mixin.js mixin混入【过滤器】
- tool.js 工具方法
- debounce.js 防抖自定义组件
- verification.js 常用正则校验

## 组件（components）
- 基础组件
- 公共组件
