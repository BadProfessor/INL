#
# Example file for formatting time and date output
#

# import the class
from datetime import datetime

# define the main method
def main():
    # Times and dates can be formatted using a set of predefined string
    # control codes
    now = datetime.now()  # get the current date and time

    #### Date Formatting #### This will format it into a string

    # %y/%Y - Year, %a/%A - weekday, %b/%B - month, %d - day of month
    # This will format it into a string
    print(now.strftime("The current year is: %Y"))  # full year with century

    print("==========================================================")

    print(
        now.strftime("%a, %d %B, %y")
    )  # abbreviated day name, day of the month, full month, abbreviated year

    print("==========================================================")

    # %c - locale's date and time, %x - locale's date, %X - locale's time
    print(now.strftime("Locale date and time: %c"))
    print("==========================================================")
    # This is how it is set on the computer
    print(now.strftime("Locale date: %x"))
    print("==========================================================")
    print(now.strftime("Locale time: %X"))
    print("==========================================================")

    #### Time Formatting ####

    # %I/%H - 12/24 Hour, %M - minute, %S - second, %p - locale's AM/PM
    # 12-Hour:Minute:Second:AM
    print(now.strftime("Current time: %I:%M:%S %p"))
    print("==========================================================")
    # 24-Hour:Minute
    print(now.strftime("24-hour time: %H:%M"))


if __name__ == "__main__":
    main()
