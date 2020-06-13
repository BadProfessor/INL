"""Calling HTTP + JSON API using requests"""

# install the requests library and startup the server
# not working, can't figure out the bug

import requests

url = "http://localhost:8080/trips"
query = {
    "start": "2018-11-01T00:02:04",
    "end": "2018-11-01T00:44:51",
}
headers = {
    "x-trips-token": "l3tm3in",
}


resp = requests.get(url, params=query, headers=headers)
if not resp.ok:
    raise SystemExit(f"FAIL: {resp.status_code} - {resp.reson}")

reply = resp.json()
if not reply["ok"] or "trips" not in reply:
    raise SystemExit(f"bad reply - {reply}")

count = len(reply["trips"])
print(f"Total of {count} trips found")
