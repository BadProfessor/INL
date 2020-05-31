#
# Example file for working with functions
#

# define a basic function
# def keyword defines a funciton
def func1():
    # print method in the function
    print("I am a function")


# function that takes arguments and execute instead of writing
def func2(arg1, arg2):
    print(arg1, " ", arg2)


# function that returns a value
# another function
def cube(x):
    return x * x * x


# function with default value for an argument
def power(num, x=1):
    result = 1
    for i in range(x):
        result = result * num
    return result


# function with variable number of arguments
def multi_add(*args):
    result = 0
    for x in args:
        result = result + x
    return result


# calls the functions
# Three calls
print("==========================")
func1()
print(func1())
print(func1)
# 4 calls
print("==========================")
func2(10, 20)
# Two calls
print(func2(10, 20))
# 27
print(cube(3))
print(power(2))
print(power(2, 3))
# reversing the order
print(power(x=3, num=2))
# function with multiple calls
print(multi_add(4, 5, 10, 4))
