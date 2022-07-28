import Cards from './cards.js'

export default function CardsGallery() {
  return(
      <div className="cards-gallery">
        <Cards
          img="katie-zafares.jpg"
          rating="5.0"
          reviewCount = "(6)"
          country = "Brazil"
          price = "123"
        />
      </div>
  )
}
