#
# Example file for parsing and processing HTML
#

# import the HTMLParser module
# in Python 3 you need to import from html.parser
# html parser module and class
from html.parser import HTMLParser

# import os since it is not reading
import os

# checking the metacount, and increasing the metacount if there are meta tags
metacount = 0

# create a subclass of HTMLParser and override the handler methods
class MyHTMLParser(HTMLParser):
    # function to handle an opening tag in the doc
    # this will be called when the closing ">" of the tag is reached

    # handle the different tags
    def handle_starttag(self, tag, attrs):
        global metacount
        if tag == "meta":
            metacount += 1

        print("Encountered a start tag:", tag)
        # returns a tuple indication line and character
        pos = self.getpos()
        print("\tAt line: ", pos[0], " position ", pos[1])

        if attrs.__len__() > 0:
            print("\tAttributes:")
            for a in attrs:
                print("\t", a[0], "=", a[1])

    # function to handle the ending tag
    def handle_endtag(self, tag):
        print("Encountered an end tag:", tag)
        pos = self.getpos()
        print("\tAt line: ", pos[0], " position ", pos[1])

    # function to handle character and text data (tag contents)
    def handle_data(self, data):
        if data.isspace():
            return
        print("Encountered some text data:", data)
        pos = self.getpos()
        print("\tAt line: ", pos[0], " position ", pos[1])

    # function to handle the processing of HTML comments
    # take in the data
    def handle_comment(self, data):
        # print it out
        print("Encountered comment:", data)
        # get the position
        pos = self.getpos()
        print("\tAt line: ", pos[0], " position ", pos[1])


# call the main function
def main():
    # instantiate the parser and feed it some HTML
    # html parser
    parser = MyHTMLParser()

    # had to fix this since for some reason the relative path was not being read, so I used the absolute
    THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
    my_file = os.path.join(THIS_FOLDER, "samplehtml.html")
    # open the sample HTML file and read it
    f = open(my_file, "r")
    if f.mode == "r":
        contents = f.read()  # read the entire file
        parser.feed(contents)

    # print out the total number of meta tags
    print("%d meta tags encountered" % metacount)


if __name__ == "__main__":
    main()
