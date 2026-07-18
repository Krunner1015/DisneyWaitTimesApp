from fastapi import FastAPI
import requests

app = FastAPI()

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

    response = requests.get(url)

    data = response.json()

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