'''
python list集合使用
'''
weishi = ['zhanghuaiting', 'hanlihao', 'wangzhigang', 'helinfeng',
          'zhouhaiqiang', 'zhanglei', 'houzhichao', 'guojin',
          'shiruiru', 'wujinsheng', 'wangjianxin', 'huxuejie',
          'sunjingtao', 'zhaokang', 'wanghuiling', 'liurui',
          'panhaibo', 'huangliling', 'caoweijia', 'xuzhishan',
          'dujuan', 'liuxuan', 'liuqiuxia']

# print(len(weishi))

weishiObj = [
                {'frontend': ['helinfeng', 'zhanglei', 'zhouhaiqiang', 'houzhichao']},
                {'backend': ['guojin', 'shiruiru', 'wujinsheng']},
                {'test': ['liuqiuxia']},
                {'ue': ['sunjingtao', 'huxuejie']},
                {'pm': ['hanlihao', 'wangjianxin']},
                {'om': ['zhaokang', 'liurui', 'liuxuan', 'wanghuiling']},
                {'hr': ['huangliling']},
                {'b2c': ['caoweijia', 'xuzhishan']},
                {'leader': ['zhanghuaiting']},
                {'rd': ['wangzhigang']}
             ]

objlen = 0
if (weishiObj):
    for each in weishiObj:
        for key, value in each.items():
            objlen += len(value)

# print(objlen)

weishiObjList = []
if (weishiObj):
    for each in weishiObj:
        for key, value in each.items():
            for item in value:
                weishiObjList.append(item)

for each in weishi:
    if each not in weishiObjList:
        # print(each)
        pass

for each in weishiObjList:
    if each not in weishi:
        # print(each)
        pass

for each in weishiObj:
    for key, value in each.items():
        if key == 'pm':
            value.append('dujuan')
        if key == 'om':
            value.append('panhanbo')

    # for each in each.items():
    #     print(each)