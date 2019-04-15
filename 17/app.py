#Team Bob: Issan Jon and Jerry Ye
# SoftDev2 pd7
# K17 -- PPFTLCW
# 2019-04-15 M
#1)
l12 = [str(x) * 2 for x in range(0,9,2)]
print(l12)
l11 = []
for x in range(0,9,2):
    l11.append(str(x)*2)
print(l11)

#2)
l22 = [7 + (10*x) for x in range(5)]
print(l22)
l21 = []
for x in range(5):
    l21.append(7+(10*x))
print(l22)

#3)
l31 = []
for x in range(3):
    for y in range(0,3):
        l31.append(x*y)
print(l31)
l32 = [x*y for x in range(0,3) for y in range(0,3)]
print(l32)
#4) + 5)

primes = [2]
for x in range(3, 101, 2):
    for k in primes:
        if x % k == 0:
            break
    else:
        primes.append(x)
composites = []
for x in range(101):
    if not(x in primes):
        composites.append(x)
print(primes)
print(composites)

l = [2,3,5,7]
#composites = [x * c if x * c <= 100 else 0 for x in l for c in range(2,50)]
composites1 = [x*c for x in l for c in range(2,50) if x * c <= 100]
composites1 = list(set(composites1))
print(composites1)
primes1 = [x for x in range(2,50) if not(x in composites1)]
print(primes1)

def getDivisors(num):
    l = []
    for x in range(1,num + 1):
        if num % x == 0:
            l.append(x)
    return l
def getDivisors2(num):
    return [x for x in range(1,num+1) if num %x == 0 ]
print(getDivisors(10))
print(getDivisors2(10))

def transpose(matrix):
    l = []
    for r in range(len(matrix[0])):
        l2 = []
        for c in range(len(matrix)):
            l2.append(matrix[c][r])
        l.append(l2)
    return l
print(transpose([[1,2,3],[1,2,3]]))
def transpose2(matrix):
    return [[matrix[r][c] for r in range(len(matrix))] for c in range(len(matrix[0]))]
print(transpose2([[1,2,3],[1,2,3]]))
