# 快速开发React-Native项目
#### React-Native版本0.65.1
* 使用react-navigation6.x 进行页面管理,自定义顶部布局和底部布局，iOS和Android端页面适配
#### 项目中的teaset组件，在当前rn版本无法正常使用，使用补丁包进行修复：
> 1. 修改依赖包内容
> 2. yarn patch-package teaset
> 3. yarn run postinstall
#### 目录结构(tree -L 2 -I node_modules)
```
├── App.js
├── README.md
├── android
├── app.json
├── config 
│   └── config.ts （api文档配置文件）
├── index.js
├── ios
├── package.json
├── patches（补丁文件）
├── script （生成api文档的脚本）
│   └── openapi.js
└── src
    ├── api  (生成的api文档)
    ├── assets （资源文件夹）
    ├── components （组件文件夹）
    ├── navigation.js （导航配置，配置一次后无需再改）
    ├── pages （所有页面的文件夹）
    ├── root.js（配置导航使用的每个页面，每次新增页面都需要添加）
    └── utils （工具类文件夹）

```

#### 使用openapi自动化生成api目录
> 1. 新建配置文件config.ts,用于存放swagger相关信息
> 2. 新建script目录,使用openapi.js脚本
> 3. package.json文件中，添加scripts: "openapi": "rm -rf src/api && node ./script/openapi.js"(相关路径根据实际情况定)
> 4. yarn openapi
> 5. 项目中，直接调用api中的方法直接请求即可



