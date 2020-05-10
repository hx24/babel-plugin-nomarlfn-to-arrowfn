## 将普通函数转为箭头函数的 babel 插件

安装

```
yarn add babel-plugin-nomarlfn-to-arrowfn -D
```

配置.babelrc 使用插件

```
{
  "plugins": [
    [
      "nomarlfn-to-arrowfn",
      {
        "enable": true  // 是否启用，默认为true
      }
    ]
  ]
}

```
