const button = document.getElementById("loadButton");

button.addEventListener("click", loadPark);

async function loadPark() {

    const park = document.getElementById("parkSelect").value;

    const response =
        await fetch(`http://127.0.0.1:8000/waittimes/${park}`);

    const data = await response.json();

    console.log(data);
}