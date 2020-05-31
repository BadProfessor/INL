#
# Example file for working with loops
#


def main():
    x = 0

    # define a while loop
    # white x is less than 5
    while x < 5:
        # print this
        print(x)
        x = x + 1
    print("=============================================")
    # define a for loop
    # prints the x in range between 5 and 10
    for x in range(5, 10):
        print(x)
    print("=============================================")
    # use a for loop over a collection, in this case days
    # it is not just numbers
    days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    for d in days:
        # prints out the days
        print(d)
    print("=============================================")
    # use the break and continue statements

    for x in range(5, 10):
        # this breaks the condition of a loop
        # if (x == 7): break
        # this skips over the condition it meets in the code
        # if (x % 2 == 0): continue
        print(x)
    print("=============================================")
    # using the enumerate() function to get index
    # this method will enumarate the Strings
    days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    # this returns the index and the member of the collection
    for i, d in enumerate(days):
        print(i, d)
    print("=============================================")


if __name__ == "__main__":
    main()
