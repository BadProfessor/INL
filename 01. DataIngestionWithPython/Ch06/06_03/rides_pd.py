"""Using Pandas to work with databases"""
# doesn't execute in VS code but it executes in the Anaconda console
import sqlite3

import pandas as pd

import os

THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
# os.path.join(THIS_FOLDER, "test")

conn = sqlite3.connect(
    os.path.join(THIS_FOLDER, "rides.db"), detect_types=sqlite3.PARSE_DECLTYPES
)

# What's the average ride distance for VeriFone?
params = {
    "vendor": "VeriFone",
}
sql = "SELECT distance FROM rides WHERE vendor = :vendor"

df = pd.read_sql(sql, conn, params=params)
avg_distance = df["distance"].mean()
print(f"average distance: {avg_distance:.2f}miles")
