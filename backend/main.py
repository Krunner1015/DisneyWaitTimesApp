from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

DISNEY_PARKS = {
    6: "Magic Kingdom",
    5: "EPCOT",
    7: "Hollywood Studios",
    8: "Animal Kingdom"
}

@app.get("/parks")
def get_parks():
    return DISNEY_PARKS

@app.get("/waittimes/{park_id}")
def get_wait_times(park_id: int):
    url = f"https://queue-times.com/parks/{park_id}/queue_times.json"

    try:
        response = requests.get(url, timeout=10)
        data = response.json()

    except requests.exceptions.RequestException:
        return {
            "error": "Could not retrieve wait times"
        }

    result = []

    for land in data["lands"]:
        rides = []

        for ride in land["rides"]:
            rides.append({
                "name": ride["name"], 
                "wait_time": ride["wait_time"], 
                "open": ride["is_open"]
            })
        
        result.append({
            "land": land["name"], 
            "rides": rides
        })
    
    return {
        "park_id": park_id,
        "park": DISNEY_PARKS[park_id], 
        "lands": result
    }