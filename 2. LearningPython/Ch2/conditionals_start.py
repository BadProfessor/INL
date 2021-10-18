#
# Example file for working with conditional statements
#


def main():
    # arguments
    # we can change this and test it out
    x, y = 10, 100

    # conditional flow uses if, elif, else
    # chaining the if else statements
    # if x less then y
    if x < y:
        st = "x is less than y"
    # if it is equal to each other
    elif x == y:
        st = "x is same as y"
    # in case there are no more results or if x is greater than y
    else:
        st = "x is greater than y"
    print(st)

    # conditional statements let you use "a if C else b"
    # similar to the terary operator in JavaScript
    st = "x is less than y" if (x < y) else "x is greater than or equal to y"
    # prints the string
    print(st)

    # Python does not have support for higher-order conditionals
    # like "switch-case" in other languages


# calling the function
if __name__ == "__main__":
    main()
