# print('Hello!')
# #this creates comments

# a = "hello"
# print(a)

#str prints string
# a = str(1)
# print(a)
#int print integer
# b = int("5")
# print(b)
#float makes it decimal
# c = float(4) 
# print(c)
#int prints integer rounds down
# d = int(5.7)
# print(d)

# a = 1
# b = a+1
# # print(b)
# c = b * 3
# # print(c)
# d = c - 1
# # print(d)
# e = d / 2
# # print(e)
# f = d ** 2
# print(f)

# a = [1, 5, "some string", True, 5.6]
# print(a)

# a = [
#     [1, 2, 3], #first row
#     [4, 5, 6], #second row
#     [7, 8, 9], #third row
#     [10] #fourth row
# ]
# print(a)

# obejcts are called dictionaries in python and the key-value pairs must be in quotations
# my_car = {
#   "brand": "Ford",
#   "model": "Mustang",
#   "year": 1964
# }
# print(my_car["brand"])

# there can be lists in dictionaries and dictionaries in lists

# a = [
#     {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
#     },
#     [4, 5, 6],
#     [7, 8, 9],
#     [10]
# ]
# print(a)

# b = {
#   "firstGrade": ["Bobby", "Kyle", "Suzy"],
#   "secondGrade": ["Jennifer", "Jasmine", "Javier"],
#   "thirdGrade": "Nobody, they all failed last year!"
# }
# print(b)

# if else statements are if elif statements and indentation is key
# a = 22
# if a < 10:
#     print("a is less than 10")
# elif a == 10: #== is an exact match != not equal to
#     print("a is 10")
# else:
#     print("a is greater than 10")

# strings can also be compared
# a = 'oh hai!'
# if a == 'oh hai!':
#     print('this works')

# a = 1
# b = 2
# if a == 1 and b == 2:
#   print('y') # will print only when both a==1 AND b==2
# else:
#   print('n') # will print if either condition is false

# if a == 0 and b == 2:
#   print('y') # will print only when both a==1 AND b==2
# else:
#   print('n') # will print if either condition is false

# a = 2
# b = 2
# if a == 1 or b == 2:
#   print('y') # will print when either a==1 OR b==2
# else:
#   print('n') # will print if both conditions are false

# if a == 1 or b == 1:
#   print('y') # will print when either a==1 OR b==2
# else:
#   print('n') # will print if both conditions are false

# user_input = input("Please enter your name:")
# print("Hello " + user_input + "!")

# a = 10
# while a < 20:
#     print("the value of a is currently: " + str(a))
#     a += 1

# foods = ['hot dogs', 'beer', 'bald eagles']
# for food in foods:
#     print(food)
# for x in range(0, 3):
#   print(x)

#activities
# numbers=[70, 95, 97, 55, 3, 24, 89, 97, 84, 11]
# for number in numbers:
#     print(number)

# print(add(number))?
#need help doing these activities


# def greet():
#   print('hi')

# greet()

# def greet(name):
#     print('hi, ' + name)
# greet('carolina')

# def add(value1, value2):
#   return value1 + value2

# print(add(1,3))

# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

#   def greet(self):
#     print("Hello, my name is " + self.name + ". My age is " + str(self.age))

# me = Person("Hunter", 29)
# me.greet()
# sally = Person("Sally", 53)
# sally.greet()

#classes can inherit from other classes. you can have a super class and a subclass. any classes defined in super class are passed down to subclass

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print("Hello, my name is " + self.name + ". My age is " + str(self.age))

    def work(self):
        print("Boring...")

class SuperHero(Person): # tell it to inherit from Person
    def __init__(self, name, age, powers):
        super().__init__(name,age) # call Person's __init__()
        self.powers = powers

    def greet(self):
        super().greet() # call Person's greet()
        self.listPowers()

    def listPowers(self):
        for power in self.powers:
            print(power)

    def work(self): # override Person's work()
        print("To action!")

superman = SuperHero('Clark Kent', 200, ['flight', 'strength', 'invulnerability'])

superman.greet()
superman.work()
