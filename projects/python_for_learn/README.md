# python_for_learn
A record for learning and teaching python.
Welcome to join and help us better.

## 最新更新

- [关于python学习](./doc/about_learning_python.md)
- [关于python语言](./doc/about_python.md)

## 连接数据库准备(python3)

### 服务器开启数据库应用对应端口

```
systemctl start firewalld 
firewall-cmd --zone=public --add-port=3306/tcp --permanent
firewall-cmd --reload(此步非必须)
```

```
命令含义：

--zone #作用域

--add-port=80/tcp #添加端口，格式为：端口/通讯协议

--permanent #永久生效，没有此参数重启后失效
```

### 安装python用于连接数据库的模块

```
git clone https://github.com/PyMySQL/PyMySQL
cd PyMySQL/
python3 setup.py install
cd ..
rm -rf PyMySQL/
```

### 关于pymysql

[PyMySQL](https://github.com/PyMySQL/PyMySQL)

QA: 网上教的都是python2使用MySQLdb模块，python3用PyMySQL模块，为什么我的python2却成功地引入了PyMySQL

> 仔细看PyMySQL在github中的介绍可发现，PyMySQL支持python2.7或大于等于python3.4版本的python，所以可能恰巧你使用的python2是python2.7

### 修改mysql原始密码

```
mysql -u root

mysql> use mysql;

mysql> UPDATE user SET Password = PASSWORD('newpass') WHERE user = 'root';

mysql> FLUSH PRIVILEGES;
```

## 协作准备

[gitlab或github下fork后如何同步源的新更新内容](https://www.zhihu.com/question/28676261)

## 参考链接

- [tutorialspoint](https://www.tutorialspoint.com/python3/python_database_access.htm)
- [菜鸟教程-中文python3教程](http://www.runoob.com/python3/python3-mysql.html)
- [python2.7 and python3 操作MySQL数据库类](https://my.oschina.net/leeyisoft/blog/909145)
- [What is __pycache__?](https://stackoverflow.com/questions/16869024/what-is-pycache)
- [Git忽略文件.gitignore的使用](https://www.jianshu.com/p/a09a9b40ad20)
- [gitignore](https://github.com/github/gitignore)