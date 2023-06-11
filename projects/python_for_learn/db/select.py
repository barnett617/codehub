#!/usr/bin/python3
# -*- coding: UTF-8 -*-
 
import pymysql

db_ip = "45.76.52.16"
db_username = "root"
db_password = "toor"
db_name = "python_for_learn"


db_list = []
# f = open('../db.db','r')
# result = list()
# for line in open('../db.db'):
#     line = f.readline()
#     db_list.append(line)
#     # print line
#     result.append(line)
# # print db_list
# # print result
# f.close()  

# config = []

# for each in result:
#     config.append(str(each).replace(' ', '').split('=')[1])

# print(config[0])
# print(config[1])
# print(config[2])
# print(config[3])


# con = pymysql.connect(config[0], config[1], config[2], config[3])

# with con:
#     # 仍然是，第一步要获取连接的cursor对象，用于执行查询
#     cur = con.cursor()
#     # 类似于其他语言的query函数，execute是python中的执行查询函数
#     cur.execute("SELECT * FROM Writers")
 
#     # 使用fetchall函数，将结果集（多维元组）存入rows里面
#     rows = cur.fetchall()
 
#     # 依次遍历结果集，发现每个元素，就是表中的一条记录，用一个元组来显示
#     for row in rows:
#         print row