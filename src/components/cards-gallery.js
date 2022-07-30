import Cards from './cards.js'
import CardsData from './data.js'

// We send props as numbers if we intend to manipulate than somehow at
// the component code.
export default function CardsGallery() {
  const dataArray = CardsData.map(dataObject => <Cards
      key = {dataObject.id}
      img = {dataObject.coverImg}
      rating = {dataObject.stats.rating}
      star = "star.png"
      reviewCount = {dataObject.stats.reviewCount}
      country = "USA"
      title = {dataObject.title}
      price = {dataObject.price}
      openSpots = {dataObject.openSpots}
      location = {dataObject.location}
    />)

  return(
      <div className="cards-gallery">
        {dataArray}
      </div>
  )
}
