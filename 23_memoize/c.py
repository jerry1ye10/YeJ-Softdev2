import random

def make_HTML_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

@make_HTML_heading
def greet():
    greetings = ["hi", 'hello']
    return random.choice(greetings)
print(greet())
print(greet)
print(make_HTML_heading)

def memo(f):
    past = {}
    def fib(num):
        if num in past:
            return past[num]
        else:
            v = f(num)
            past[num] = v
            print(past)
            return v
    print(past)
    return fib

#equivalent to memo(fibonacci)(num)
@memo
def fibonacci(n):
    if n == 0:
        return 1
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n-2)
print(fibonacci(7))
