def quicksort(L):
    if L == []:
        return []
    pivot = L[0]
    less = quicksort([x for x in L[1:] if x <= pivot])
    greater = quicksort([x for x in L if x > pivot])
    return less + [pivot] + greater
print(quicksort([2,3,5,1,12,3]))
def getAllPythTriples(n):
    return [[a,b,int((a*a + b*b)**.5)] for a in range(1,n) for b in range(1,n) if (a *a + b * b) **.5 < n and int((a *a + b * b) **.5) == (a *a + b * b) **.5]
print(getAllPythTriples(25))
