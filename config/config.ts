// // https://umijs.org/config/
// import { defineConfig } from 'umi';





//根目录新建 script/config.js
module.exports = {
    openApi: [
        {
            requestLibPath: "import  request  from '../../utils/request'",
            schemaPath: '', // openAPI规范地址
            projectName: 'swagger', // 生成到哪个目录内
            apiPrefix: '',// 增加前缀
            serversPath: './src/api', // 生成代码到哪个目录
        },
        {
            requestLibPath: "import  request  from '../../utils/request'",
            schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json', // openAPI规范地址
            projectName: 'oneapi', // 生成到哪个目录内
            serversPath: './src/api', // 生成代码到哪个目录
        }
    ],
};

