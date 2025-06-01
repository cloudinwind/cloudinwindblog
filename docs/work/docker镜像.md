---
title: docker镜像2
cover: https://pic.imgdb.cn/item/66a08708d9c307b7e9ef76f7.webp
categories:
  - 环境部署
tags:
  - 服务器
  - 环境部署
createTime: 2025/04/02 15:33:07
permalink: /posts/dockerimages2/
---

## docker镜像拉取（可以快速使用的版本）

> docker可用镜像汇总：https://github.com/dongyubin/DockerHub

### **`docker pull` 拉取**

原方案：`docker pull wwwsine/feishu2md`

此方法默认使用官方的镜像源，但是因为国内docker镜像官网无法访问，而更改`docker`源需要重启`docker` 服务

根据可用镜像的汇总，以`	docker.1ms.run`为例：

**新的拉取方式**: 
```
docker pull docker.1ms.run/wwwsine/feishu2md
```
> 如果找不到该镜像，则更换镜像源重试

### docker compose

原方案的 `docker-compose.yml` 如下：
```
# docker-compose.yml
version: '3'
services:
  feishu2md:
    image: wwwsine/feishu2md
    environment:
      FEISHU_APP_ID: <your id>
      FEISHU_APP_SECRET: <your secret>
      GIN_MODE: release
    ports:
      - "8080:8080"
```

**修改后可用 `docker-compose.yml`**:

```
# docker-compose.yml
version: '3'
services:
  feishu2md:
    image: docker.mybacc.com/wwwsine/feishu2md
    environment:
      FEISHU_APP_ID: <your id>
      FEISHU_APP_SECRET: <your secret>
      GIN_MODE: release
    ports:
      - "8080:8080"

```