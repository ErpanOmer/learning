# Git

## 命令行
```shell
# 强制删除一条分支
git branch -D [branchName]

# 强制删除当前分支外的所有分支
git branch | xargs git branch -D

# 强制删除分支名包含指定'xxx'的分支
git branch | grep 'xxx' | xargs git branch -D


# 列出全部 git 配置
git config --list


# 新增和删除 git 远程仓库地址
git remote add origin [远程仓库地址]
git remote remove origin


# 列出已制定的 git 远程仓库地址
git remote -v


# 设置全局 git 配置
git config --global user.name [git名称]
git config --global user.email [git邮箱]
git config --global user.passwrd [git密码]

```

## commit 规范
| 指令           |      含义      | 
| ------------- | :-----------: |
| feat          | 新功能         |
| fix           | 修补 bug       |
| docs          | 仅文档的改动    |
| style         | 代码格式的改动，不影响代码运行的变动。         |
| refactor      | 重构，即不是新增功能，也不是修改bug的代码变动       |
| perf          | 性能优化    |
| test          | 增加测试         |
| build         | 构建过程       |
| chore         | 不修改源代码的杂项变动    |


