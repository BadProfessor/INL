#
# Example file for working with timedelta objects
#

# import all the time packages
from datetime import date
from datetime import time
from datetime import datetime

# time delta is a span of time
from datetime import timedelta

# construct a basic timedelta and print it
# pass in time that is not time right now
print(timedelta(days=365, hours=5, minutes=1))

print("==========================================================")

# store the todays date
now = datetime.now()
# print today's date
print("Today is: " + str(now))

print("==========================================================")

# print today's date one year from now
# this is combining the delta and todays time
# adds on the time without writing horrible functions
print("One year from now it will be: " + str(now + timedelta(days=365)))

print("==========================================================")

# create a timedelta that uses more than one argument
# we can combine them
print("In two weeks and 3 days it will be: " + str(now + timedelta(weeks=2, days=3)))

print("==========================================================")

# it is also possible to go into the past
# calculate the date 1 week ago, formatted as a string
t = datetime.now() - timedelta(weeks=1)
s = t.strftime("%A %B %d, %Y")
print("One week ago it was " + s)

print("==========================================================")

### How many days until April Fools' Day?

# get today's date
today = date.today()
# get April Fool's for the same year
afd = date(today.year, 4, 1)
# use date comparison to see if April Fool's has already gone for this year
# if it has, use the replace() function to get the date for next year
if afd < today:
    print("April Fool's day already went by %d days ago" % ((today - afd).days))
    # if so, get the date for next year
    afd = afd.replace(year=today.year + 1)

    print("==========================================================")

# Now calculate the amount of time until April Fool's Day
time_to_afd = afd - today
# print it out
print("It's just", time_to_afd.days, "days until next April Fools' Day!")

print("==========================================================")
