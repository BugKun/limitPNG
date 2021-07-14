# limitPNG
### 基于原版的修改
**实现以下的功能仅为了自用，不接受我自身需求外的功能开发和修复，欢迎PR、Fork**

- [x] 完善项目构建功能

**直接启动**
```bash
npm start
```
**打包构建**
```bash
npm run release
```
- [ ] 修正压缩大文件时，子进程超时导致进程卡死的问题

- [ ] 并行处理数量，最大为CPU线程数

- [ ] 新增压缩时，保留ICCP信息的功能(仅无损压缩)


<p align="center">
  <img  src ="https://camo.githubusercontent.com/c10c48507ae27228904724b76ae6dcfeacdf93ac/687474703a2f2f7777312e73696e61696d672e636e2f6c617267652f633335343139663167773166347162746f636e7834673230636830636a316b782e676966" />
</p>

GUI PNG image compression tool ( GUI use Electron)

[http://nullice.com/limitPNG/](http://nullice.com/limitPNG/)

这是个用 electron 开发的图形界面 PNG 图片压缩工具。

支持无损压缩和有损压缩。

比同类的 PNGGauntle 、 scriptPNG 、 Leanify 、 Caesium  能压缩得更小。


---- 






使用以下工具:

实际上这是一个压缩工具集合，使用了以下压缩工具的二进制文件，

compression Using tool binary list ：
- [zopflipng](https://github.com/google/zopfli)
- [pngwolf](http://bjoern.hoehrmann.de/pngwolf/)
- [pngquant](https://pngquant.org/)
- [TruePNG](http://x128.ho.ua/pngutils.html)
- [PNGOUT](http://advsys.net/ken/utils.htm#pngout)
- [ect](http://css-ig.net/)

---- 
### LICENSES
**CC0 Public Domain**

这是一个共有领域作品，本人不保有此作品任何权益，任何人可以随意使用、修改和分发，不要求署名

[![](http://ww3.sinaimg.cn/large/c35419f1gw1f4qhrttrtqj202g00v742.jpg)](http://creativecommons.org/publicdomain/zero/1.0)



-----------

##### 不显眼的功能：

![](http://ww4.sinaimg.cn/large/c35419f1gw1f4qkb9h82yj205k02edfn.jpg)

连续双击文件列表信息文字这里可以生成一个 html 格式的处理报告，有并在浏览器中打开，要保存请保存网页。  
报告里面有详细的压缩信息，和使用压缩工具的流程日志：

![报告](http://ww3.sinaimg.cn/large/c35419f1gw1f4qkeragasj20zm09wdme.jpg)




![](http://ww2.sinaimg.cn/large/c35419f1gw1f4qkg4wfowj203d00o741.jpg)

右键窗口标题可以打开文件对比功能，选择一系列文件，会以第一个文件为原文件来计算大小，生成文件大小比较报告：
![](http://ww3.sinaimg.cn/large/c35419f1gw1f4qki0eadzj20j90akgo0.jpg)

![](http://ww2.sinaimg.cn/large/c35419f1gw1f4qklh0qa5j20lu079wgz.jpg)




