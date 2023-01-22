# Nginx

## 下载和编译
从[Nginx官网](http://nginx.org/en/download.html)下载 `tar.gz` 压缩包(Stable版)<br>
下载完成后，通过ftp工具, 把压缩包上传至linux指定目录，并解压<br>
nginx-1.22.1.tar.gz为例：
```shell
tar -zxvf nginx-1.22.1.tar.gz
```
解压成功后，进入解压目录，开始编译
```shell
# 先执行配置项，这里会有到gzip_static
./configure --prefix=/usr/local/nginx --with-http_gzip_static_module

# 编译
make && make install
```

## 命令行
```shell
# 启动
nginx

# 停止
nginx -s stop

# 重启
nginx -s restart
```

## 配置文件路径
```shell
# macOS (基于brew)
/opt/homebrew/etc/nginx/nginx.conf

#Linux
/usr/local/nginx/conf/nginx.conf
```

## 可执行文件路径
```shell
# macOS (基于brew)
/opt/homebrew/opt/nginx/bin/nginx

#Linux
/usr/local/nginx/sbin/nginx
```

## 环境配置
用vim编辑 /etc/profile 文件<br>
::: warning 提示
macOs 系统是：～/.bash_profile
:::
文件末尾加入这一行：
```shell
# $PATH指向 nginx可执行文件所在目录
export PATH=$PATH:/usr/local/nginx/sbin

# 保存退出后刷新
source /etc/profile
```


## 内置变量
| 变量名         |      解释      |
| ------------- | :-----------: |
| $args         | 这个变量等于GET请求中的参数。例如，foo=123&bar=blahblah;这个变量只可以被修改 |
| $host         |   请求中的主机头(Host)字段，如果请求中的主机头不可用或者空，则为处理请求的server名称(处理请求的server的server_name指令的值)。值为小写，不包含端口。    |
| $hostname     |   机器名使用 gethostname系统调用的值    |

## 有关文章
[Nginx 从入门到实践，万字详解！](https://juejin.cn/post/6844904144235413512)<br>
[Nginx内置变量与配置文件详解-参数说明](https://www.cnblogs.com/layzer/articles/nginx_file.html)