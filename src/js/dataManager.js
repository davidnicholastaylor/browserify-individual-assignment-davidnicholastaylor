const dataManager = Object.create(null, {
    savePlace: {
        value: (entry) => {
            return fetch("http://localhost:8088/places", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
                .then(response => response.json())
        }
    },
    getAllPlaces: {
        value: () => {
            return fetch("http://localhost:8088/places?_order=desc&_sort=date").then(r => r.json())
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