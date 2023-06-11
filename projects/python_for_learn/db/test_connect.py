#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
 
import pymysql
import os



# print(os.getcwd())

# print(os.listdir(os.getcwd()))

def mapToStr(obj, delimeter):
    return str(obj.split(delimeter)[1]).replace(' ', '')

# 存储读取数据库配置文件的内容
db_list = []
# 宏分隔符
delemeter = '='
# 数据库键值对
db_dict = {}

with open("./db.db", "r") as f:
    for line in f.readlines():
        # 可以去掉收尾空白部分
        line = line.strip()  
        # print(line)
        db_list.append(line)
    # print (db_list)

# host = str(db_list[0].split('=')[1]).replace(' ', '')

'''
pymysql.err.OperationalError: (2003, "Can't connect to MySQL server on '45.76.52.16\\n' ([Errno 8] nodename nor servname provided, or not known)")
read的每一行有换行符
'''


host = mapToStr(db_list[0], delemeter)
user = mapToStr(db_list[1], delemeter)
password = mapToStr(db_list[2], delemeter)
database = mapToStr(db_list[3], delemeter)

# TODO 把数据库配置文件读取并存储到字典中

# print(host)


# f = open("os.getcwd()/db.txt","r")
# result = list()
# for line in f:
#     db_list.insert(line)
#     print (line)
# f.close() 
 
# 打开数据库连接
db = pymysql.connect(host,user,password,database)
 
# 使用 cursor() 方法创建一个游标对象 cursor
cursor = db.cursor()
 
# 使用 execute()  方法执行 SQL 查询 
cursor.execute("SELECT VERSION()")
 
# 使用 fetchone() 方法获取单条数据.
data = cursor.fetchone()
 
print ("Database version : %s " % data)
 
# 关闭数据库连接
db.close()

import sys
print(sys.version)
'''
Database version : 5.6.39
2.7.15 (default, Aug 22 2018, 16:36:18)
[GCC 4.2.1 Compatible Apple LLVM 9.1.0 (clang-902.0.39.2)]
'''