"""Working with SQL database"""
# module cannot be found, even though it is imported into Anaconda. Need to debug this
# but it executes in the anaconda console
import sqlite3

import os

THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
# os.path.join(THIS_FOLDER, "test")

conn = sqlite3.connect(
    os.path.join(THIS_FOLDER, "rides.db"), detect_types=sqlite3.PARSE_DECLTYPES
)
conn.row_factory = sqlite3.Row

# What's the average ride distance for VeriFone?
params = {
    "vendor": "VeriFone",
}
sql = "SELECT distance FROM rides WHERE vendor = :vendor"

cur = conn.cursor()
cur.execute(sql, params)
total, count = 0, 0
for row in cur:
    total += row["distance"]
    count += 1

avg_distance = total / count
print(f"average distance: {avg_distance:.2f}miles")
