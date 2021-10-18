import os

THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
# os.path.join(THIS_FOLDER, "test")
# End of the Windows relative path

import pyarrow.parquet as pq

table = pq.read_table(os.path.join(THIS_FOLDER, "taxi.parquet"))

df = table.to_pandas()

df.dtypes

df.head()
