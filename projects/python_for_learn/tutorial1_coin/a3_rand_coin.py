'''
利用随机数函数升级掷硬币程序
'''
import random

positive = {1, '正面'}
negative = {0, '反面'}
neutral = {2, '中立'}

input = random.choice([0, 1, 2])
print(input)
