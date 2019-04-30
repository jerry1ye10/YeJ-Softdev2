from functools import reduce

# prod = 1
# list = [1,2,3,4]
# for x in list:
#     prod *= x
# print(prod)
#
# print(reduce( (lambda x,y: x*y),
#         [1,2,3,4]))

# Use list comprehensions + reduce
# * Frequency of a single word
# * Total frequency of a group of words
# * Most frequently occurring word

listOfWords = open("text.txt", "r").read().split()
listOfWords = [w.lower().strip() for w in listOfWords]
# print(listOfWords[0:150])
test = ["a", "a", "b", "b", "b", "c", "c", "a", "b", "b", "c", "c", "a", "b", "b"]

#Completed
#==========================================================================
def wordFrequency(word, list):
    # l = [1 for x in test if x == word]
    l = [1 for x in list if x == word]
    # return len(l)
    if len(l) == 0:
        return 0
    return reduce((lambda x,y: x+y), l)

# print(wordFrequency("a", test))
# print(wordFrequency("b", test))
# print(wordFrequency("c", test))
# print(wordFrequency("d", test))

# print(wordFrequency("a", listOfWords))
# print(wordFrequency("I", listOfWords))
# print(wordFrequency("then", listOfWords))
# print(wordFrequency("Aristotle", listOfWords))

def mostFrequentWord(list):
    return reduce((lambda x,y: x if wordFrequency(x, list) > wordFrequency(y, list) else y), list)

# print(mostFrequentWord(listOfWords))
# print(mostFrequentWord(test))

def wordGroupFrequency(wordGroup, list):
    wordGroupList = wordGroup.lower().split()
    numWords = len(wordGroupList)
    l = [1 for x in range(len(list)) if wordGroupList == list[x: x+numWords]]
    if len(l) == 0:
        return 0
    return reduce((lambda x,y: x+y), l)

# print(wordGroupFrequency("a b b", test))
print(wordGroupFrequency("the most", listOfWords))
#==========================================================================
