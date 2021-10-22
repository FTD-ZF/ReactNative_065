# 快速开发React-Native项目
#### React-Native版本0.65.1
* 使用react-navigation6.x 进行页面管理,自定义顶部布局和底部布局，iOS和Android端页面适配
#### 项目中的teaset组件，在当前rn版本无法正常使用，使用补丁包进行修复：
> 1. 修改依赖包内容
> 2. yarn patch-package teaset
> 3. yarn run postinstall
#### 目录结构
```
├── App.js
├── README.md
├── android
├── app.json
├── index.js
├── ios
├── package.json
├── patches（补丁文件）
└── src
    ├── assets （资源文件夹）
    ├── components （组件文件夹）
    ├── navigation.js （导航配置，配置一次后无需再改）
    ├── pages （所有页面的文件夹）
    ├── root.js（配置导航使用的每个页面，每次新增页面都需要添加）
    └── utils （工具类文件夹）

```
