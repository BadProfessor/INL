#
# Example file for retrieving data from the internet
#

# module for requests to a web server
# instead of urllib2 like in Python 2.7
import urllib.request

# defining the main function
def main():
    # open a connection to a URL using urllib2
    # we are getting a response object with this
    webUrl = urllib.request.urlopen("http://www.google.com")

    # get the result code and print it
    # we get it with the getcode function
    print("result code: " + str(webUrl.getcode()))

    # # read the data from the URL and print it
    # with this we read the actual datam which is the html - front end
    # read it
    data = webUrl.read()
    # print it
    print(data)


if __name__ == "__main__":
    main()
