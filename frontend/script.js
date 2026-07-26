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

        // Remove hidden rides first
        const visibleRides = land.rides.filter(
            ride => !HIDDEN_RIDES.includes(ride.name)
        );

        // Skip this land if nothing is left
        if (visibleRides.length === 0) {
            return;
        }

        // Show land title
        const landTitle = document.createElement("h3");
        landTitle.textContent = land.land;

        ridesDiv.appendChild(landTitle);


        // Loop through visible rides
        visibleRides.forEach(ride => {

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

function getRideName(name) {

    return RIDE_DATA[name]?.displayName || name;

}