#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

'''
脚本语言的第一行，目的就是指出，你想要你的这个文件中的代码用什么可执行程序去运行它

#!/usr/bin/python3是告诉操作系统执行这个脚本的时候，调用/usr/bin下的python3解释器；
#!/usr/bin/env python3这种用法是为了防止操作系统用户没有将python3装在默认的/usr/bin路径里。
# 当系统看到这一行的时候，首先会到env设置里查找python3的安装路径，再调用对应路径下的解释器程序完成操作。
#!/usr/bin/python3相当于写死了python3路径;
#!/usr/bin/env python3会去环境设置寻找python3目录,推荐这种写法
'''
 
# import pymysql



# db_list = []

# f = open('../db.db','r')
# result = list()
# for line in open('../db.db'):
#     line = f.readline()
#     db_list.insert(line)
#     print line
#     result.append(line)
# print result
# f.close()          
 
# 打开数据库连接
# db = pymysql.connect(db_ip, db_username, db_password, db_name)
 
# 使用 cursor() 方法创建一个游标对象 cursor
# cursor = db.cursor()
 
# sql = """INSERT INTO USER(id,username, info)
#          VALUES ('3', 'jingtao', 'houhouhou')"""

# sql = "SELECT * FROM USER"

# try:
#    # 执行sql语句
#    cursor.execute(sql)
#    # 获取所有记录列表
#    results = cursor.fetchall()
#   #  print(results)
#   #  for row in results:
#   #     username = row[1]
#   #     info = row[2]
#   #      # 打印结果
#   #     print ("username=%s,info=%d" % \
#   #            (username, info ))
#    # 提交到数据库执行
#    # db.commit()
# except:
#    # 如果发生错误则回滚
#   #  db.rollback()
#   print ("Error: unable to fetch data")

# 使用 execute()  方法执行 SQL 查询 
# cursor.execute("SELECT VERSION()")

# cursor.execute("SELECT 1 from USER")
 
# 使用 fetchone() 方法获取单条数据.
# data = cursor.fetchone()
 
# print ("Database version : %s " % data)
 
# 关闭数据库连接
# db.close()