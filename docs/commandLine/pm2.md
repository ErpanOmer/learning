# PM2

## 命令行
```shell
# 启动 node 进程
pm2 start [文件]

# 启动 node 进程并命名
pm2 start [文件] --name [进程命名]

# 列出所有的 node 程序
pm2 list

# 显示每个 node 进程的CPU和内存占用情况
pm2 monit

# 显示 node 进程的所有信息
pm2 show [进程名]

# 显示所有 node 进程日志
pm2 logs

# 显示指定 node 进程日志
pm2 logs [进程名]

# 停止所有的 node 进程
pm2 stop all

# 重启所有 node 进程
pm2 restart all

# 零秒停机重新加载所有 node 进程
pm2 reload all

# 关闭并删除所有 node 进程
$ pm2 delete all
```
