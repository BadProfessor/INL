"""Load & convert data from CSV file using Python built-in csv module"""
# import the needed modules
import bz2

# two readers. we are using a dictionary reader
import csv
from collections import namedtuple
from datetime import datetime

import os

Column = namedtuple("Column", "src dest convert")

# return a timestamp
def parse_timestamp(text):
    return datetime.strptime(text, "%Y-%m-%d %H:%M:%S")


# columns to read from the data
columns = [
    Column("VendorID", "vendor_id", int),
    Column("passenger_count", "num_passengers", int),
    Column("tip_amount", "tip", float),
    Column("total_amount", "price", float),
    Column("tpep_dropoff_datetime", "dropoff_time", parse_timestamp),
    Column("tpep_pickup_datetime", "pickup_time", parse_timestamp),
    Column("trip_distance", "distance", float),
]

# this creates an empty dictionary
# for every column it applies the value
def iter_records(file_name):
    with bz2.open(file_name, "rt") as fp:
        reader = csv.DictReader(fp)
        for csv_record in reader:
            record = {}
            for col in columns:
                value = csv_record[col.src]
                record[col.dest] = col.convert(value)
            yield record


# print out the results
def example():
    from pprint import pprint

    THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
    my_file = os.path.join(THIS_FOLDER, "taxi.csv.bz2")
    for i, record in enumerate(iter_records(my_file)):
        if i >= 10:
            break
        pprint(record)


example()
