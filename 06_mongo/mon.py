# William Lu, Jerry Ye
# SoftDev2 pd7
# K06 -- Yummy Mongo Py
# 2019-03-01 F

import pymongo

SERVER_ADDR = "104.248.109.96"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def get_restaurant_borough(borough):
    list = []
    result = collection.find({"borough":borough})
    for r in result:
        list.append(r)
    return list

def get_restaurant_zip(zip):
    list = []
    result = collection.find({"address.zipcode":zip})
    for r in result:
        list.append(r)
    return list

def get_restaurant_zip_grade(zip, grade):
    list = []
    result = collection.find({"$and": [{"address.zipcode":zip}, {"grades.grade":grade}]})
    for r in result:
        list.append(r)
    return list

def get_restaurant_zip_max_score(zip, score):
    list = []
    result = collection.find({"$and": [{"address.zipcode":zip}, {"grades.score":{"$lte": score}}]})
    for r in result:
        list.append(r)
    return list

print("First 10 Restaurants in Manhattan:")
result = get_restaurant_borough("Manhattan")
for i in range(10):
    print(result[i]['name'])
print("")

print("First 10 Restaurants with zip code 10027:")
result = get_restaurant_zip("10027")
for i in range(10):
    print(result[i]['name'])
print("")

print("First 10 Restaurants with zip code 10027 and grade A:")
result = get_restaurant_zip_grade("10027", "A")
for i in range(10):
    print(result[i]['name'])
print("")

print("First 10 Restaurants with zip code 10027 and score <= 6:")
result = get_restaurant_zip_max_score("10027", 6)
for i in range(10):
    print(result[i]['name'])
