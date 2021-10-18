#
# Read and write files using the built-in Python file methods
#


def main():
    # Open a file for writing and create it if it doesn't exist
    # we add some data to the file
    # we first open it for writing and (+) means to create it if it doesn't exist
    # f = open("textfile.txt", "w+")

    # Open the file for appending text to the end
    # this adds text and (+) if it doesn't exist
    # it doesn't overwrite
    # f = open("textfile.txt", "a+")

    # write some lines of data to the file
    # for i in range(10):
    #     f.write("This is line %d\r\n" % (i + 1))

    # close the file when done
    # firle needs to open and then closes
    # f.close()

    # Open the file back up and read the contents
    # reading
    f = open("textfile.txt", "r")
    # check to make sure that the file was opened
    if f.mode == "r":
        # use the read() function to read the entire file
        # contents = f.read()
        # # print them out
        # print(contents)

        # readlines reads the individual lines into a list
        fl = f.readlines()
        for x in fl:
            print(x)


if __name__ == "__main__":
    main()
