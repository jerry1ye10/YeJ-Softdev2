#Jerry Ye
#Softdev2 pd7
#K22 -- Closure
#2019-05-0
def repeat(x):
    def re(num):
	return x * num
    return re

print(repeat('cool')(3))
r1 = repeat('hello')
print(r1(2))

def make_counter():
    a = 0
    def add():
        nonlocal a
        a += 1
        return a
    return add
ctr1 = make_counter()

print(ctr1())
print(ctr1())
ctr2 = make_counter()
print(ctr2())
print(ctr2())
print(ctr1())

def make_counter2():
    a = 0
    def add():
        nonlocal a
        a += 1
        return a
    def getA():
        return a
    return add,getA
c = make_counter2()
print(c[0]())
print(c[0]())
print(c[1]())
