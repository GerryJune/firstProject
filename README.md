###Welcome to use Github
## step one
0  [github账号注册]:https://github.com

1 `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
  cmd,打开控制台  邮箱替换为上面注册的邮箱<br/>
2 `Generating public/private rsa key pair`  
  用上面命令生成ssy 密钥  
3 `Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]`  
  上述提示为ssh key要保存的地址,windows默认的保存地址为C盘<br/>
4 `Enter passphrase (empty for no passphrase): [Type a passphrase]
   Enter same passphrase again: [Type passphrase again]`
 上述询问是否需要密码,为方便,我们默认回车密码为空就可


## step two

* 安装git客户端(安装包上传至APP开发群)
* github邀请到开发团队,步骤如下
[仓库->setting]:'https://raw.githubusercontent.com/GerryJune/firstProject/master/imgs/1.png'
![步骤]("https://raw.githubusercontent.com/GerryJune/firstProject/master/imgs/1.png")
* 克隆仓库代码并上传:<br/>
1 `git clone https://github.com/GerryJune/firstProject.git`<br/>
2 `cd firstProject`-->`git init `(初始化仓库)--><br/>`git remote add origin https://github.com/GerryJune/firstProject.git`(添加远程仓库)--><br/>`git add .`(添加所有要上传的文件)-->`git commit -m "这里写注释"`--><br/>`git pull origin master`(把代码拉取下来)-->`git push origin master`(代码推上去)

> 注:浅灰色背景为要键入的命令


