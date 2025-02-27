在写毕设的间隙，无意中刷到基于Vuepress的博客介绍，其整合博客和文档的特点完美符合我的需要，因此进行diy。

在此感谢 [@physnya](https://github.com/physnya/blog)

如果直接使用此模板

## 1. fork 该库

请注意，fork后设定名称，比如本人是 `cloudinwindblog`

## 2. 修改配置

请分别修改 `docs/.vuepress` 下所有和域名相关的配置

- config.ts
- plume.config.ts


请修改 `docs/.vuepress/config.ts` 中的：

```
imageSize: true
```
从而不处理远程图片，只处理本地图片


## 3. 运行 Github Action

## 4. 设置 Github Page

**Branch** 设置为

`gh-pages /root`

然后点击保存


## 3. 官网

[官网指南](https://theme-plume.vuejs.press/demos/#%E5%8D%9A%E5%AE%A2)

[官网案例](https://theme-plume.vuejs.press/demos/)

## 补充：

如果上述方法仍然失败，可参考：

[](https://cunyu1943.github.io/tutorial/blog/20210826-vuepress.html)