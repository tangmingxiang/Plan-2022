# Plan-2022

2022年新一代前端课程

### 下一代在哪里？

* Bundless
* Lowcode
* WebIDE
* Vue3

### 2022.08 班PPT地址

* https://github.com/FE-star/2022.08

#### nest-graphql 项目下载至本地，在执行完 npm install、npm run start 命令之后，报如下错误
* Error: Cannot find module 'C:/Users/\u5510\u660E\u54CD/Desktop/\u524D\u7AEF\u8FDB\u9636\u57F9\u8BAD_\u6781\u5BA2\u65F6\u95F4/Plan-2022-main/nest-graphql/src/activity/models/activity.model'
* 此时只需将 /nest-graphql/dist/activity/models/activity.model.js 中对应报错行的代码删除，再 npm run start:prod 即可

#### data-processor 项目启动过程中，需要先启动对应的微服务否则取不到数据
