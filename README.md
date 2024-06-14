# vite react app

# react R18 执行两次
React 18会再Strict Mode中引入一个新的开发模式。React将会对每一个组件自动取消加载并重新加载。如果其干扰了你的应用，移除Strict Mode就能够修复组件重新加载的问题

# 项目搭建

## 规范

- eslint
```
npm init @eslint/config@latest

```
- prettier
```
yarn add prettier -D   

yarn add eslint-config-prettier eslint-plugin-prettier -D
```


# 问题
eslint 安装的新版本 配置较之前版本变化很大，需对照文档配置，避免错误
- 之前extends 配置项 现在配置 prettier 的recommended 报错，带解决

# 参考链接
react router https://reactrouter.com/en/main

https://juejin.cn/post/7123612981895626760?searchId=20240614140609B26FCD8ABC89B882D749#heading-4