# 介绍
本项目是ePub阅读器的原生部分

# 调试
请先前往以下项目并运行
[https://github.com/wuyu8512/ebook_reader](https://github.com/wuyu8512/ebook_reader "https://github.com/wuyu8512/ebook_reader")

更改MainActivity中的loadUrl部分(有两处)，即可连接真机并进行调试，如果是在虚拟机中调试，可以将内网地址改为10.0.2.2，这是对本机地址的映射

```
webView.loadUrl("http://192.168.1.26:8080/#/read/${Uri.encode(path)}/${Uri.encode(name)}")
// webView.loadUrl("file:///android_asset/dist/index.html#/read/${Uri.encode(path)}/${Uri.encode(name)}")
```
# 构建
将loadUrl的部分改为资源地址，将资源文件夹dist替换成Web项目编译出的文件即可，同时建议删除Web项目里编译出的三个无用的测试ePub文件
