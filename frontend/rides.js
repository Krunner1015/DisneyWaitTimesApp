const RIDE_DATA = {
    "\"it's a small world\"": {
        displayName: "Small World"
    },
    "Seven Dwarfs Mine Train": {
        displayName: "Mine Train"
    },
    "TRON Lightcycle / Run": {
        displayName: "TRON"
    },
    "Pirates of the Caribbean": {
        displayName: "Pirate's"
    },
    "Peter Pan's Flight": {
        displayName: "Peter Pan"
    },
    "Tiana's Bayou Adventure": {
        displayName: "Tiana"
    },
    "Swiss Family Treehouse": {
        displayName: "Treehouse"
    },
    "The Magic Carpets of Aladdin": {
        displayName: "Carpets"
    },
    "The Many Adventures of Winnie the Pooh": {
        displayName: "Winnie the Pooh"
    },
    "The Barnstormer": {
        displayName: "Barnstormer"
    },
    "Walt Disney's Enchanted Tiki Room": {
        displayName: "Tiki Room"
    },
    "Dumbo the Flying Elephant": {
        displayName: "Dumbo"
    },
    "Mad Tea Party": {
        displayName: "Tea Cups"
    },
    "Mickey's PhilharMagic": {
        displayName: "PhilharMagic"
    },
    "Prince Charming Regal Carrousel": {
        displayName: "Carrousel"
    },
    "Under the Sea - Journey of The Little Mermaid": {
        displayName: "Ariel"
    },
    "Big Thunder Mountain Railroad": {
        displayName: "Thunder Mountain"
    },
    "Buzz Lightyear’s Space Ranger Spin": {
        displayName: "Buzz"
    },
    "Tomorrowland Speedway": {
        displayName: "Speedway"
    },
    "Tomorrowland Transit Authority PeopleMover": {
        displayName: "PeopleMover"
    },
    "Journey Into Imagination With Figment": {
        displayName: "Figment"
    },
    "Guardians of the Galaxy: Cosmic Rewind": {
        displayName: "Guardians of the Galaxy"
    },
    "Test Track Presented by Chevrolet Single Rider": {
        displayName: "Test Track: Single Rider"
    },
    "Journey of Water, Inspired by Moana": {
        displayName: "Moana"
    },
    "Soarin' Across America": {
        displayName: "Soarin"
    },
    "The Seas with Nemo & Friends": {
        displayName: "Nemo"
    },
    "Frozen Ever After": {
        displayName: "Frozen"
    },
    "Gran Fiesta Tour Starring The Three Caballeros": {
        displayName: "Three Caballeros"
    },
    "Remy's Ratatouille Adventure": {
        displayName: "Ratatouille"
    },
    "Remy's Ratatouille Adventure Single Rider": {
        displayName: "Ratatouille: Single Rider"
    },
    "Indiana Jones™ Epic Stunt Spectacular!": {
        displayName: "Indiana Jones"
    },
    "Star Tours – The Adventures Continue": {
        displayName: "Star Tours"
    },
    "Mickey & Minnie's Runaway Railway": {
        displayName: "Runaway Railway"
    },
    "Millennium Falcon: Smugglers Run": {
        displayName: "Millennium Falcon"
    },
    "Millennium Falcon: Smugglers Run Single Rider": {
        displayName: "Millennium Falcon: Single Rider"
    },
    "Star Wars: Rise of the Resistance": {
        displayName: "Resistance"
    },
    "Star Wars: Rise of the Resistance Single Rider": {
        displayName: "Resistance: Single Rider"
    },
    "Rock ’n’ Roller Coaster Starring The Muppets": {
        displayName: "Rock 'n' Roller Coaster"
    },
    "Rock 'n' Roller Coaster Starring Aerosmith Single Rider": {
        displayName: "Rock 'n' Roller Coaster: Single Rider"
    },
    "The Twilight Zone™ Tower of Terror": {
        displayName: "Tower of Terror"
    },
    "Kilimanjaro Safaris": {
        displayName: "Safari"
    },
    "Expedition Everest - Legend of the Forbidden Mountain": {
        displayName: "Everest"
    },
    "Expedition Everest - Legend of the Forbidden Mountain Single Rider": {
        displayName: "Everest: Single Rider"
    },
    "Kali River Rapids": {
        displayName: "Rapids"
    },

    // Hidden attractions
    "Casey Jr. Splash 'N' Soak Station": { hidden: true },
    "Cinderella Castle": { hidden: true },
    "Main Street Vehicles": { hidden: true },
    "Walt Disney World Railroad - Fantasyland": { hidden: true },
    "Walt Disney World Railroad - Main Street, U.S.A.": { hidden: true },
    "Meet Mickey at Town Square Theater": { hidden: true },
    "Meet Ariel at Her Grotto": { hidden: true },
    "A Pirate's Adventure ~ Treasures of the Seven Seas": { hidden: true },
    "Jungle Cruise": { hidden: true },
    "Enchanted Tales with Belle": { hidden: true },
    "Meet Cinderella and a Visiting Princess at Princess Fairytale Hall": { hidden: true },
    "Meet Daring Disney Pals as Circus Stars at Pete's Silly Sideshow": { hidden: true },
    "Meet Dashing Disney Pals as Circus Stars at Pete's Silly Sideshow": { hidden: true },
    "Meet Princess Tiana and a Visiting Princess at Princess Fairytale Hall": { hidden: true },
    "Country Bear Musical Jamboree": { hidden: true },
    "Jessie’s Roundup: A Rip-Roarin’ Revue!": { hidden: true },
    "The Hall of Presidents": { hidden: true },
    "Monsters, Inc. Laugh Floor": { hidden: true },
    "Walt Disney's Carousel of Progress": { hidden: true },
    "Disney and Pixar Short Film Festival": { hidden: true },
    "GoofyCore at CommuniCore Hall": { hidden: true },
    "Meet Beloved Disney Pals at Mickey & Friends": { hidden: true },
    "Awesome Planet": { hidden: true },
    "Living with the Land": { hidden: true },
    "SeaBase Aquarium": { hidden: true },
    "Turtle Talk With Crush": { hidden: true },
    "Canada Far and Wide in Circle-Vision 360": { hidden: true },
    "Meet Anna and Elsa at Royal Sommerhus": { hidden: true },
    "Disney Jr. Mickey Mouse Clubhouse Live!": { hidden: true },
    "Meet Ariel at Walt Disney Presents": { hidden: true },
    "The Little Mermaid – A Musical Adventure": { hidden: true },
    "Walt Disney Presents": { hidden: true },
    "Meet Disney Stars at Red Carpet Dreams": { hidden: true },
    "For the First Time in Forever: A Frozen Sing-Along Celebration": { hidden: true },
    "Meet Olaf at Celebrity Spotlight": { hidden: true },
    "Vacation Fun - An Original Animated Short with Mickey & Minnie": { hidden: true },
    "Meet Edna Mode at the Edna Mode Experience": { hidden: true },
    "Beauty and the Beast – Live on Stage": { hidden: true },
    "Festival of the Lion King": { hidden: true },
    "Gorilla Falls Exploration Trail": { hidden: true },
    "Wildlife Express Train": { hidden: true },
    "Feathered Friends in Flight!": { hidden: true },
    "Animal Care at Conservation Station": { hidden: true },
    "Bluey's Wild World at Conservation Station": { hidden: true },
    "Finding Nemo: The Big Blue... and Beyond!": { hidden: true },
    "Discovery Island Trails": { hidden: true },
    "Meet Favorite Disney Pals at Adventurers Outpost": { hidden: true },
    "Meet Moana at Character Landing": { hidden: true },
    "Tree of Life": { hidden: true },
    "Zootopia: Better Zoogether!": { hidden: true },
    "The Oasis Exhibits": { hidden: true },
    "Wilderness Explorers": { hidden: true }
};