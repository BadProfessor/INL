#
# Example file for variable
#

# Declare a variable and initialize it
f = 0
print(f)

# re-declaring the variable works
f = "abc"
print(f)

# ERROR: variables of different types cannot be combined
# print ("string type " + 123)
print("string type " + str(123))

# Global vs. local variables in functions
def someFunction():
    # this makes it global
    # global f
    f = "def"
    print(f)


# call the function
someFunction()
# call the variable from outside of the fucntion
print(f)

# delete the variable
del f
# calling it will cause an error
# print(f)
