# #
# # Example file for working with classes
# #

# # defining a class which we are going to use later
# # class keyword
# # we can add a superclass
# # functions that are part of the class is a method
# class myClass:
#     # defining a method
#     def method1(self):
#         print("myClass method1")

#     def method2(self, someString):
#         print("myClass method2: " + someString)


# # this class inherits from the first
# class anotherClass(myClass):
#     def method2(self):
#         print("anotherClass method2")

#     def method1(self):
#         # calling first the inherited class and method
#         myClass.method1(self)
#         print("anotherClass method1")


# def main():
#     # we instantiate the class
#     c = myClass()
#     c.method1()
#     c.method2("This is a string")
#     c2 = anotherClass()
#     # first calling the inherited class and method
#     c2.method1()
#     # then calling the method's class
#     c2.method2()
#     # error when more strongs entered than accepted
#     # c2.method1("This is a string")


# if __name__ == "__main__":
#     main()


# # def inc(a, b=1):
# #     return a + b


# # a = inc(1)
# # a = inc(a, a)
# # print(a)


def Sum10th(data):
    sum = 0
    for i, d in enumerate(data):
        if i % 10 == 0:
            sum = sum + d
    return sum

