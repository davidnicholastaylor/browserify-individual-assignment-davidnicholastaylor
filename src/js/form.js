const placesForm = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#restaurantInput").value = ""
            document.querySelector("#cityInput").value = ""
            document.querySelector("#stateInput").value = ""
            document.querySelector("#locationDescription").value = ""
        }
    },
    formBuilder: {
        value: () => {
            return `<div id="addPlaceForm">
                <input id="restaurantInput" placeholder="Restaurant">
                <input id="cityInput" placeholder="City">
                <input id="stateInput" placeholder="State">
                <textarea id="placeDescription" placeholder="Description"></textarea>
                <div class="locationButtonContainer">
                    <button id="postLocationButton">Add Location</button>
                </div>
            </div>`
        }
    }
})

module.exports = placesForm