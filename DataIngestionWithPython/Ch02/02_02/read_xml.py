"""Load rides data from XML"""

import bz2
import xml.etree.ElementTree as xml

import pandas as pd

# convert to Windows relative path
import os

THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
# os.path.join(THIS_FOLDER, "test")
# End of the Windows relative path

# Data conversions
conversion = [
    ("vendor", int),
    ("people", int),
    ("tip", float),
    ("price", float),
    ("pickup", pd.to_datetime),
    ("dropoff", pd.to_datetime),
    ("distance", float),
]


# whole file into the memory and parse it
def iter_rides(file_name):
    with bz2.open(file_name, "rt") as fp:
        tree = xml.parse(fp)

    rides = tree.getroot()
    for elem in rides:
        record = {}
        for tag, func in conversion:
            text = elem.find(tag).text
            record[tag] = func(text)
        yield record


def load_xml(file_name):
    records = iter_rides(file_name)
    return pd.DataFrame.from_records(records)


# Example
if __name__ == "__main__":
    df = load_xml(os.path.join(THIS_FOLDER, "taxi.xml.bz2"))
    print(df.dtypes)
    print(df.head())
