#Jerry Ye
#SoftDev2 pd7
#K16 -- Do you even list?
#2019-04-12

def is_num(n):
    return n in '12356789'
def check_min_threshold(password):
    p = [1 if is_num(x) else 2 if x.upper() == x else 0 for x in password]
    return 1 in p and 2 in p and 0 in p
print(check_min_threshold('aB1'))

def give_pass_strength(password):
    special_chars = '. ? ! & # , ; : - _ *'
    special_chars = special_chars.split(' ')
    p = [1 if is_num(x) else 0 if x in special_chars else 2 if x.upper() == x else 3 for x in password]
    num_lower = p.count(3)
    num_upper = p.count(2)
    score = 0
    if 1 in p:
        score += 2
    if 0 in p:
        score +=3
    score += 5 - abs(num_lower - num_upper)
    print(p)
    return score
print(give_pass_strength('aB1&'))
