# 关于python学习的整理

## 常见问题列表

- [学习python2还是python3](#学习python2还是python3)

### 学习python2还是python3

曾经这可能还可以成为困惑初学者的一个问题，但如今（2021年）已不用再纠结——答案就是python3

因为官方都已经宣布停止维护python2，每当你使用python时都不难发现python官方提醒你使用python3，python2的继续存在只是为了维持历史使用python2的项目能够正常运行

就像这样👇

![python3](./images/python3.png)

### 如何安装python3

从官网下载安装包即可，其内部包含IDLE(集成开发环境)和pip(依赖包管理器)

如下👇

![python3-download](./images/python-download.png)

安装后按照安装器最后的提示安一下安全证书

![ssl-installer](./images/ssl-installer.png)

![ssl](./images/ssl.png)

### 解释一下到底什么是python

初学者可能很困惑，到底什么是python，一会要学习python，一会要安装python的，还有python脚本啥的，python到底是啥

所以说python固然被称为最简单的编程语言，但也需要具备一定的计算机基础知识才能理清上面所说的这些

1. 可能网上有很多课程在教python，那指的是python这门计算机编程语言的`语法`，也就是书写规则。
2. 其次就是为什么要安装python，其实就是在你的计算机上安装一个可以运行python代码的环境。因为你使用python语法写出代码，你知道这是python语法，但你的计算机不知道，你需要你的计算机和你在语法层面达成共识，依赖的就是一套环境，所以安装python指的是安装能够运行python的环境。
3. 最后就是python脚本是啥，其实就是可以被python环境识别的文件，你在电脑新建一个txt文件、word文件、excel文件，你的计算机是不会把它们当做python脚本的。但你如果新建一个以.py为后缀的文件，你双击打开时，你的计算机就会把它识别为python脚本，从而寻找计算机上是否有执行python的环境，当找到环境后，就会按照python的语法解释这个文件的内容。当脚本中包含逻辑时，计算机就会执行这些逻辑，这就是代码执行的过程。

### 如何管理多个版本python

#### 背景

因为有的python程序依赖新版本的功能，可能你本机安装的python版本不支持，所以这时候就需要我们能够同时管理多个版本的python环境

#### 怎么办

使用pyenv ([参考](https://www.freecodecamp.org/news/manage-multiple-python-versions-and-virtual-environments-venv-pyenv-pyvenv-a29fb00c296f/))

