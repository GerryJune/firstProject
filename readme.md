###Welcome to use Github
## step one
0 [github账号注册]:https://github.com

1 `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
  cmd,打开控制台,输入上述命令,邮箱换为step one 注册的邮箱地址
2 `Generating public/private rsa key pair`
  生成ssy 密钥
3 `Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]`
  上述提示为ssh key要保存的地址,windows默认的保存地址为C盘
4 `Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]`
  上述询问是否需要密码,为方便,我们默认回车密码为空就可


## step two

* 安装git客户端(安装包上传至APP开发群)
* github邀请到开发团队,步骤如下
[仓库->setting]:'imgs/1.png'
![步骤]("imgs/1.png")

```

MPreview({options});
```
#### options  说明
参数名  | 默认值 | 类型 | 参数说明
------- | ------ | ---- | --------
data | `null` | {Array} | 存放需要展示的图片数据。`data: ['111.jpg', '2222.jpg', '3333.jpg']`
title | `【浏览】` | {String} | 显示于组件头部的标题内容
wrap | `body` | {String} | 指定在哪个容器下显示，支持 `document.querySelector` 的选择器。`如：.class, element, #id, ul > li`;
direction | `top` | {String} | 指定图片按哪个方向切换，`top` 上下切换，`left` 左右切换。
close | `null` | {Function} | 关闭组件时的回调方法
## 代码说明
```
html
<!--此处生成vue组件代码-->
<img-preview></img-preview>
javascript
//组件注册
    Vue.component('img-preview',{
        template:'<ul class="img-list">'+ //组件模板
                    '<li v-for="img in imgs" :number="img.number">'+
                        '<a href="javascript:;" title=""><img :src="img.url" alt="图片1" /></a>'+
                    '</li>'+
                '</ul>',
        data:function(){//将源数据赋予vue渲染页面
            return {
                imgs: imgs.data
            }
        },
    })
事件方法见代码注释index.
```

markdown preview
