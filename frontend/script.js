const CUSTOM_NAMES = {
    "\"it's a small world\"": "Small World",
    "Seven Dwarfs Mine Train": "Mine Train",
    "TRON Lightcycle / Run": "TRON",
    "Pirates of the Caribbean": "Pirate's",
    "Peter Pan's Flight": "Peter Pan",
    "Tiana's Bayou Adventure": "Tiana", 
    "Swiss Family Treehouse": "Treehouse",
    "The Magic Carpets of Aladdin": "Carpets", 
    "The Many Adventures of Winnie the Pooh": "Winnie the Pooh",
    "The Barnstormer": "Barnstormer",
    "Walt Disney's Enchanted Tiki Room": "Tiki Room",
    "Dumbo the Flying Elephant": "Dumbo",
    "Mad Tea Party": "Tea Cups",
    "Mickey's PhilharMagic": "PhilharMagic",
    "Prince Charming Regal Carrousel": "Carrousel",
    "Under the Sea - Journey of The Little Mermaid": "Ariel",
    "Big Thunder Mountain Railroad": "Thunder Mountain",
    "Buzz Lightyear’s Space Ranger Spin": "Buzz",
    "Tomorrowland Speedway": "Speedway",
    "Tomorrowland Transit Authority PeopleMover": "PeopleMover",
    "Journey Into Imagination With Figment": "Figment",
    "Guardians of the Galaxy: Cosmic Rewind": "Guardians of the Galaxy",
    "Test Track Presented by Chevrolet Single Rider": "Test Track: Single Rider",
    "Journey of Water, Inspired by Moana": "Moana",
    "Soarin' Across America": "Soarin",
    "The Seas with Nemo & Friends": "Nemo",
    "Frozen Ever After": "Frozen",
    "Gran Fiesta Tour Starring The Three Caballeros": "Three Caballeros",
    "Remy's Ratatouille Adventure": "Ratatouille",
    "Remy's Ratatouille Adventure Single Rider": "Ratatouille: Single Rider",
    "Indiana Jones™ Epic Stunt Spectacular!": "Indiana Jones",
    "Star Tours – The Adventures Continue": "Star Tours",
    "Mickey & Minnie's Runaway Railway": "Runaway Railway",
    "Millennium Falcon: Smugglers Run": "Millennium Falcon",
    "Millennium Falcon: Smugglers Run Single Rider": "Millennium Falcon: Single Rider",
    "Star Wars: Rise of the Resistance": "Resistance",
    "Star Wars: Rise of the Resistance Single Rider": "Resistance: Single Rider",
    "Rock ’n’ Roller Coaster Starring The Muppets": "Rock 'n' Roller Coaster",
    "Rock 'n' Roller Coaster Starring Aerosmith Single Rider": "Rock 'n' Roller Coaster: Single Rider",
    "The Twilight Zone™ Tower of Terror": "Tower of Terror",
    "Kilimanjaro Safaris": "Safari",
    "Expedition Everest - Legend of the Forbidden Mountain": "Everest",
    "Expedition Everest - Legend of the Forbidden Mountain Single Rider": "Everest: Single Rider",
    "Kali River Rapids": "Rapids"
}; // Add more custom names as needed
const HIDDEN_RIDES = [
    "Casey Jr. Splash 'N' Soak Station",
    "Cinderella Castle",
    "Main Street Vehicles",
    "Walt Disney World Railroad - Fantasyland",
    "Walt Disney World Railroad - Main Street, U.S.A.",
    "Meet Mickey at Town Square Theater",
    "Meet Ariel at Her Grotto", 
    "A Pirate's Adventure ~ Treasures of the Seven Seas", 
    "Jungle Cruise", 
    "Enchanted Tales with Belle",
    "Meet Cinderella and a Visiting Princess at Princess Fairytale Hall",
    "Meet Daring Disney Pals as Circus Stars at Pete's Silly Sideshow",
    "Meet Dashing Disney Pals as Circus Stars at Pete's Silly Sideshow",
    "Meet Princess Tiana and a Visiting Princess at Princess Fairytale Hall",
    "Country Bear Musical Jamboree",
    "Jessie’s Roundup: A Rip-Roarin’ Revue!",
    "The Hall of Presidents",
    "Monsters, Inc. Laugh Floor",
    "Walt Disney's Carousel of Progress",
    "Disney and Pixar Short Film Festival",
    "GoofyCore at CommuniCore Hall",
    "Meet Beloved Disney Pals at Mickey & Friends",
    "Awesome Planet",
    "Living with the Land",
    "SeaBase Aquarium",
    "Turtle Talk With Crush",
    "Canada Far and Wide in Circle-Vision 360",
    "Meet Anna and Elsa at Royal Sommerhus",
    "Disney Jr. Mickey Mouse Clubhouse Live!",
    "Meet Ariel at Walt Disney Presents",
    "The Little Mermaid – A Musical Adventure",
    "Walt Disney Presents",
    "Meet Disney Stars at Red Carpet Dreams",
    "For the First Time in Forever: A Frozen Sing-Along Celebration",
    "Meet Olaf at Celebrity Spotlight",
    "Vacation Fun - An Original Animated Short with Mickey & Minnie",
    "Meet Edna Mode at the Edna Mode Experience",
    "Beauty and the Beast – Live on Stage",
    "Festival of the Lion King",
    "Gorilla Falls Exploration Trail",
    "Wildlife Express Train",
    "Feathered Friends in Flight!",
    "Animal Care at Conservation Station",
    "Bluey's Wild World at Conservation Station",
    "Finding Nemo: The Big Blue... and Beyond!",
    "Discovery Island Trails",
    "Meet Favorite Disney Pals at Adventurers Outpost",
    "Meet Moana at Character Landing",
    "Tree of Life",
    "Zootopia: Better Zoogether!",
    "The Oasis Exhibits",
    "Wilderness Explorers"
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