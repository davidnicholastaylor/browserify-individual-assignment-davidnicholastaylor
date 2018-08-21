const placeComponent = Object.create(null, {
    placeCard: {
        value: (place) => {
            return `<div id="placeCard" id="${place.id}">
            <article class="placeArticle">
                <h2 class="restaurantHeading">${place.restaurant}</h2>
                <h4 class="locationHeading">${place.city}, ${place.state}</h4>
            </article>
            <section class="placeDescriptionBody">
                ${place.description}
            </section>
            <button class="deletePlace" id="delete--${place.id}>Delete Place</button>
            </div>`
        }
    }
})

module.exports = placeComponent 