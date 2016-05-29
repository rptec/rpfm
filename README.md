# rpfm
rpfm,,fm.rpsofts.com源码，，，采用网易云音乐api，，采用fm形式播放你的歌单（当然别人的也行）。。支持手机端。\
文档 

> * http://v.rpsofts.com/app/doc/music.html

需要修改歌单，请至 php/playlist.php

rpmusic 音乐外链调用说明
=======

本站基于网易云音乐及虾米音乐的api解析和外链调用说明。

## 项目
## 1.RPFM
### 简介
基于网易云音乐和虾米的在线fm，随机调用制定palylist歌曲播放。

![](http://cdn.rpsofts.com/o_1ajudaopuov61uud120mp6t17h0a.jpg)
### 演示地址
> * http://v.rpsofts.com/app/fm/
* http://tu.rpsofts.com/views/fileRecent.php

### 源码地址
* https://github.com/rptec/rpfm

### 部署要求
php解析网易云音乐源码。。。普通php空间即可运行，，无额外要求。。。  
## 2.网易云音乐用户调用
### 简介
网易云音乐用户歌曲调用，支持列表形式显示任何用户收藏的歌单，支持网页桌面歌词等。

![](http://cdn.rpsofts.com/o_1ajufe2d55hlukc1gq91ovsjmja.jpg)
### 演示地址
> * http://v.rpsofts.com/app/fm/1.html

### 使用方法
http://v.rpsofts.com/app/fm/1/index.php?id=  此处可以填入任何网易云音乐用户id

### 源码地址
* https://github.com/rptec/rpfm

## 3.RPmusic
### 简介
HTML5 网页音乐播放器

基于 Flask 框架搭建的一个播放器，音乐源来自虾米、网易云音乐。  基于musicbox.coding.io修改。程序运行环境需要自行修改配置。（演示页面，搭建于coding，现已失效，，如有需要请自行部署）

### 演示
fm演示：演示： http://fm.rpsofts.com/   (演示服务器已经关闭，如有需要请自行搭建。)
![](http://cdn.rpsofts.com/o_1ajuavpegi79r9soti65v78ma.jpg)

虾米播放器（推荐）：  
* http://rpmusic.coding.io/xiamiplayer/377412

网易云音乐播放器（备用）：  
* http://musicbox.coding.io/m163player/5046367

（演示地址最后数字为网易或者虾米歌曲id，，你可以在其网站找到   例如：http://music.163.com/#/song?id=28793502  对应外链地址为http://musicbox.coding.io/m163player/28793502 ）
###使用
**推荐使用虾米源，没有防盗链。如果歌曲在虾米找不到，再使用网易云音乐。**

虾米播放器（推荐）：  
    
    <iframe src="http://musicbox.coding.io/xiamiplayer/394307" frameborder="0" scrolling="0" width="100%" height="200" allowtransparency></iframe>
    <iframe src="http://musicbox.coding.io/xiamiplayer/394307" frameborder="0" scrolling="0" width="100%" height="200" allowtransparency></iframe>
    
网易云音乐播放器（备用）：  
    
    <iframe src="http://musicbox.coding.io/m163player/5046367" frameborder="0" scrolling="0" width="100%" height="200" allowtransparency></iframe>

###搭建方法

1. 所依赖的模块在 requirements.txt 里。可以直接使用 `pip -r install requirements.txt`;
2. 运行`python wsgi.py`即可。

## 4.music.zzzz.cf
### 简介
网易云音乐用户歌曲调用。

### 演示地址：
> * http://music.zzzz.cf

### 使用方法：

> * http://music.zzzz.cf/playlist/33137512
> * http://music.zzzz.cf/song/26620756
