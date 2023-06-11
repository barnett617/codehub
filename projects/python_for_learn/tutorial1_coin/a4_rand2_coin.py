'''
增加枚举使程序提高可维护性
'''
import random

coin_face = {
    'positive': 1,
    'negative': 0,
    'neutral': 2
}

coin_face_str = {
    1: '正面',
    0: '反面',
    2: '中立'
}

input = random.choice([coin_face['positive'], coin_face['negative'], coin_face['neutral']])
print('请抛硬币')
print('硬币' + coin_face_str[input])

