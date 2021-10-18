#
# Example file for parsing and processing JSON
#

import urllib.request  # instead of urllib2 like in Python 2.7

# importing the json module
import json


def printResults(data):
    # Use the json module to load the string data into a dictionary
    theJSON = json.loads(data)

    # now we can access the contents of the JSON like any other Python object
    # if title is there
    if "title" in theJSON["metadata"]:
        # print out the title from the JSON
        print(theJSON["metadata"]["title"])

    # output the number of events, plus the magnitude and each event name
    # count them first
    count = theJSON["metadata"]["count"]
    # print it out to the strings
    print(str(count) + " events recorded")

    # for each event, print the place where it occurred
    # loop them over
    for i in theJSON["features"]:
        # print them out
        print(i["properties"]["place"])
    # separatating line
    print("--------------\n")

    # print the events that only have a magnitude greater than 4
    # loop over the objects over 4
    for i in theJSON["features"]:

        if i["properties"]["mag"] >= 4.0:
            # format the string
            print("%2.1f" % i["properties"]["mag"], i["properties"]["place"])
    print("--------------\n")

    # print only the events where at least 1 person reported feeling something
    print("\n\nEvents that were felt:")
    # loop it over
    for i in theJSON["features"]:
        # how many reported
        feltReports = i["properties"]["felt"]
        # if it isn't empty
        if feltReports != None:
            # if it is more than 0
            if feltReports > 0:
                # print it out and format it
                print(
                    "%2.1f" % i["properties"]["mag"],
                    i["properties"]["place"],
                    " reported " + str(feltReports) + " times",
                )


# call the main function
def main():
    # define a variable to hold the source URL
    # In this case we'll use the free data feed from the USGS
    # This feed lists all earthquakes for the last day larger than Mag 2.5
    urlData = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson"

    # Open the URL and read the data
    webUrl = urllib.request.urlopen(urlData)
    print("result code: " + str(webUrl.getcode()))
    # if it is a 200 code
    if webUrl.getcode() == 200:
        # read the data
        data = webUrl.read()
        # print out our customized results
        printResults(data)
    # if there are no results
    else:
        print(
            "Received an error from server, cannot retrieve results "
            + str(webUrl.getcode())
        )


if __name__ == "__main__":
    main()
