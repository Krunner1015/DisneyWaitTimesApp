const CUSTOM_NAMES = {
    "\"it's a small world\"": "Small World",
    "Seven Dwarfs Mine Train": "Seven Dwarfs",
    "TRON Lightcycle / Run": "TRON",
    "Pirates of the Caribbean": "Pirates",
    "Jungle Cruise": "Jungle Cruise",
    "Peter Pan's Flight": "Peter Pan",
    "Space Mountain": "Space Mountain",
    "Tiana's Bayou Adventure": "Tiana's Bayou Adventure"
}; // Add more custom names as needed
const HIDDEN_RIDES = [
    "Casey Jr. Splash 'N' Soak Station",
    "Cinderella Castle",
    "Main Street Vehicles",
    "Walt Disney World Railroad - Fantasyland",
    "Walt Disney World Railroad - Main Street, U.S.A.",
    "Meet Mickey at Town Square Theater",
    "Meet Ariel at Her Grotto"
];

const button = document.getElementById("loadButton");

button.addEventListener("click", loadPark);

async function loadPark() {

    const park = document.getElementById("parkSelect").value;

    const response =
        await fetch(`http://127.0.0.1:8000/waittimes/${park}`);

    const data = await response.json();

    displayWaitTimes(data);
}


function displayWaitTimes(data) {

    const ridesDiv = document.getElementById("rides");

    // Clear old results
    ridesDiv.innerHTML = "";

    // Add park title
    const title = document.createElement("h2");
    title.textContent = data.park;

    ridesDiv.appendChild(title);


    // Loop through lands
    data.lands.forEach(land => {

        const landTitle = document.createElement("h3");
        landTitle.textContent = land.land;

        ridesDiv.appendChild(landTitle);


        // Loop through rides
        land.rides
            .filter(ride => !HIDDEN_RIDES.includes(ride.name))
            .forEach(ride => {

            const rideDiv = document.createElement("div");
            rideDiv.className = "ride";


            // Determine dot color
            let color = "green";

            if (!ride.open) {
                color = "gray";
            }
            else if (ride.wait_time >= 60) {
                color = "red";
            }
            else if (ride.wait_time >= 30) {
                color = "orange";
            }


            rideDiv.innerHTML = `
                <span class="dot ${color}"></span>
                <span class="ride-name">${getRideName(ride.name)}</span>
                <span class="wait-time">${ride.wait_time} min</span>
            `;


            ridesDiv.appendChild(rideDiv);

        });

    });

}

function getRideName(originalName) {

    if (CUSTOM_NAMES[originalName]) {
        return CUSTOM_NAMES[originalName];
    }

    return originalName;
}