#
# Example file for working with date information
#

# import statements for the date, time and datetime functions
from datetime import date
from datetime import time
from datetime import datetime


def main():
    ## DATE OBJECTS
    # Get today's date from the simple today() method from the date class
    # storing it in a variable from the function
    today = date.today()
    # prints out the date in a nice string
    print("Today's date is ", today)
    print("==========================================================")

    # print out the date's individual components
    # This will give us a day, month and year separate from each other
    print("Date Components: ", today.day, today.month, today.year)

    print("==========================================================")

    # retrieve today's weekday (0=Monday, 6=Sunday)
    # Individual days in the week, this is in the
    # Monday starts with a 0
    print("Today's Weekday #: ", today.weekday() + 1)
    print("==========================================================")
    # create an array which is indexed
    days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]
    # Print out that day with the number and name
    print("Which is a " + days[today.weekday()])

    print("==========================================================")

    ## DATETIME OBJECTS
    # Get today's date from the datetime class
    today = datetime.now()
    print("The current date and time is ", today)

    print("==========================================================")

    # Get the current time (just the time)
    t = datetime.time(datetime.now())
    print("The current time is ", t)


if __name__ == "__main__":
    main()
