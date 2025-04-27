---
title: docker启动ssh
---

## 方法一：直接操作进程（适用于无 systemd 的镜像，如 Ubuntu、Alpine）

1. 查找 SSH 进程 PID：

```
ps aux | grep sshd
# 示例输出：root 1 0.0 0.1 12345 678 ? Ss 00:00 /usr/sbin/sshd -D
```

2. 发送 HUP 信号（重新加载配置）：

```
kill -HUP <PID>  # 替换 <PID> 为实际的进程号
```

此操作仅重新加载配置文件（如 sshd_config），不会中断现有连接。

3. 完全重启服务：

```
# 先终止进程，再启动（注意：可能导致容器退出！）
kill <PID>
/usr/sbin/sshd -D
```

## 方法二：使用 service 命令（适用于支持 SysVinit 的镜像）

```
service ssh restart
# 或
/etc/init.d/ssh restart
```