'''
第一讲：模拟掷硬币程序
'''

score = 0
input = input('输入硬币朝面情况\n')
coin = int(input)
if coin == 1:
    score += 1
elif coin == 0:
    score -= 1
else:
    print('硬币立着')
print(score)