const dataManager = require("./dataManager")
const placesForm = require("./form")
const placeComponent = require("./place")

document.querySelector("#placeForm").innerHTML = placesForm.formBuilder()

function showPlaces() {
    dataManager.getPlaces()
        .then(places => {places.forEach(place => 
            {document.querySelector("#placesList").innerHTML += placeComponent.placeCard(place)
        })
    })
    document.querySelector("#addPlaceForm").addEventListener("click", (e) => {
        if (e.target.id === "postLocationButton") {
            let newPlace = {
                restaurant: document.querySelector("#restaurantInput").value,
                city: document.querySelector("#cityInput").value,
                state: document.querySelector("#stateInput").value,       
                description: document.querySelector("#placeDescription").value          
            }
            document.querySelector("#placesList").innerHTML = ""
            dataManager.savePlace(newPlace)
            .then(() => {
                dataManager.getPlaces()
                .then((places) => {
                    places.forEach((location) => {
                        document.querySelector("#placeComponent").innerHTML += placeComponent.placeCard(location)
                    })
                })
            })
            .then(() => 
            placesForm.clearForm(),
        )
    }
})
//         document.querySelector("#placeCard").addEventListener("click", (e) => {
//             if (e.target.className === "deletePlace") {
//                 let placeSplit = e.target.id.split("--")[1];
//                 dataManager.deletePlace(placeSplit).then(() => {
//                     e.target.parentElement.remove();
//                 });
//             }
// })
}

showPlaces()