const placeComponent = Object.create(null, {
    placeCard: {
        value: (place) => {
            return `<div id="placeCard">
            <header class="placeHeader">
                <h2 class="restaurantHeading">${place.restaurant}</h2>
                <h4 class="locationHeading">${place.city}, ${place.state}</h4>
            </header>
            <article class="placeDescriptionBody">
                ${place.description}
            </article>
            <button class="deletePlace" id="delete--${place.id}>Delete Place</button>
            </div>`
        }
    }
})

module.exports = placeComponent 