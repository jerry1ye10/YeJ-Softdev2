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
