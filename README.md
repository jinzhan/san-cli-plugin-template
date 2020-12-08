# San CLI Plugin模板

---

## 安装

```bash
# 没有安装 san-cli 需要安装
npm i -g san-cli
san init jinzhan/san-cli-plugin-template san-cli-plugin-YOUR_PLUGIN_NAME
```

**PS: san-cli node 版本需要>=8.16**

## meta.js 是模板创建 prompt 交互问题

回答的内容会作为模板数据来处理文件

## 文件及目录说明

前端代码

- src: 前端文件的目录

node代码

- lib: webpack插件的目录
- index.js: San CLI插件主文件，通常是对webpack插件的包装
- ui.js: San CLI UI插件主文件


## 相关 dot 文件

模板中的`_xxx`文件会在安装之后，转换成`.xxx`文件，例如`template/_babelrc`经过`hulk init`之后，会变成`.babelrc`。

-   babelrc：babel 配置
-   editorconfig：不需要修改，设置了 tab 4 个空格等，常见规范类的配置
-   npmrc：不需要修改，注册@baidu registry
-   prettierrc：不需要修改，格式化插件
-   gitignore：git 忽略
-   fecsrc：fecs 格式化配置

## 更多说明

访问项目[README](./src/README.md)
