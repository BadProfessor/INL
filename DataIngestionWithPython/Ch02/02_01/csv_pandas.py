"""Load & converting data from CSV using Pandas"""
# New York Taxi data
# this can also be in a jupyter file, but I prefer it here
import pandas as pd

# for the absolute path
import os

time_cols = ["tpep_dropoff_datetime", "tpep_pickup_datetime"]

THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
my_file = os.path.join(THIS_FOLDER, "taxi.csv.bz2")


def load_df(file_name):
    # pass the date with the time colums
    return pd.read_csv(my_file, parse_dates=time_cols)


#
print(load_df(my_file).head())


def iter_df(file_name):
    # if it is too big we use a chunk size to split it
    yield from pd.read_csv(my_file, parse_dates=time_cols, chunksize=100)


for i, df in enumerate(iter_df(my_file)):
    if i > 10:
        break
    print(len(df))
