let refreshTimer = null;
let currentPark = 6;

const parkButtons = document.querySelectorAll(".park-button");

parkButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentPark = Number(button.dataset.park);

        parkButtons.forEach(b => b.classList.remove("active"));

        button.classList.add("active");

        loadPark();

    });

});

async function loadPark() {

    const park = currentPark;

    // Fetch wait times from the API
    const response =
        await fetch(`https://disneywaittimesapp-api.onrender.com/waittimes/${park}`);

    const data = await response.json();

    displayWaitTimes(data);


//     // Start automatic refresh
//     if (refreshTimer) {
//         clearInterval(refreshTimer);
//     }

//     refreshTimer = setInterval(() => {
//         loadPark();
//     }, 60000);
}

function displayWaitTimes(data) {

    const ridesDiv = document.getElementById("rides");

    // Clear old results
    ridesDiv.innerHTML = "";

    // Add park title
    const title = document.createElement("h2");
    title.textContent = data.park;

    ridesDiv.appendChild(title);

    const updated = document.getElementById("updatedTime");

    updated.textContent =
        "Last Updated: " +
        new Date().toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit"
        });

    // Show last updated time
    const updated = document.createElement("p");

    const firstRide = data.lands
        .flatMap(land => land.rides)
        .find(ride => ride.last_updated);

    if (firstRide) {
        const time = new Date(firstRide.last_updated);

        updated.textContent =
            "Updated: " + time.toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit"
            });

        updated.className = "updated-time";

        ridesDiv.appendChild(updated);
    }


    // Loop through lands
    data.lands.forEach(land => {

        // Remove hidden rides first
        const visibleRides = land.rides.filter(ride => !isHiddenRide(ride.name));

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
            else if (ride.wait_time >= 50) {
                color = "red";
            }
            else if (ride.wait_time >= 30) {
                color = "orange";
            }

            let waitText;

            if (!ride.open) {
                waitText = "Closed";
            }
            else if (ride.wait_time === 0) {
                waitText = "Open";
            }
            else {
                waitText = `${ride.wait_time} min`;
            }

            rideDiv.innerHTML = `
                <span class="dot ${color}"></span>
                <span class="ride-name">${getRideName(ride.name)}</span>
                <span class="wait-time">${waitText}</span>
            `;

            ridesDiv.appendChild(rideDiv);

        });

    });

}

function getRideName(originalName) {

    if (RIDE_DATA[originalName]?.displayName) {
        return RIDE_DATA[originalName].displayName;
    }

    return originalName;
}

function isHiddenRide(originalName) {
    return RIDE_DATA[originalName]?.hidden === true;
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

loadPark();