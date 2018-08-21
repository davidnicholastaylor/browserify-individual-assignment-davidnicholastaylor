const dataManager = require("./dataManager")
const placesForm = require("./form")
const placeComponent = require("./place")

document.querySelector("#placeForm").innerHTML = placesForm.formBuilder()

const listPlaces = () => {
    dataManager.getAllPlaces()
        .then(allPlaces => {allPlaces.forEach(place => 
            {document.querySelector("#placesList").innerHTML += placeComponent.placeCard(place)}
        )}
    )
    document.querySelector("#placesCard").addEventListener("click", (e) => {
        if (e.target.className === "deletePlace") {
            let placeId = e.target.id.split("--")[1];
            dataManager.deletePlace(placeId).then(() => {
                e.target.parentElement.remove();
            });
        }
    })
    document.querySelector("#addPlaceForm").addEventListener("click", (e) => {
        if (e.target.id === "postLocationButton") {
            let newPlace = {
                restaurant: document.querySelector("#restaurantInput"),
                city: document.querySelector("#cityInput"),
                state: document.querySelector("#stateInput"),       
                description: document.querySelector("#placeDescription")          
            }
            document.querySelector("#placesList").innerHTML = "";
            dataManager.savePlace(newPlace)
            .then(() => {
                dataManager.getPlaces()
                .then((places) => {
                    document.querySelector("#placeCard").innerHTML = ""
                    places.forEach((location) => {
                        document.querySelector("#placeCard").innerHTML += place.placeCard(location)
                    })
                })
            })
            .then(() => 
                placesForm.clearForm(),
                listPlaces()
            )
        }
    })
    
}
listPlaces()