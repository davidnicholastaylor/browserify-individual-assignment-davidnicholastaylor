const dataManager = Object.create(null, {
    savePlace: {
        value: (place) => {
            return fetch("http://localhost:8088/places", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(place)
            })
                .then(response => response.json())
        }
    },
    getPlaces: {
        value: () => {
            return fetch("http://localhost:8088/places")
            .then(r => r.json())
        }
    },
    deletePlace: {
        value: (id) => {
            return fetch(`http://localhost:8088/places/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    }
})

module.exports = dataManager