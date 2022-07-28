import Cards from './cards.js'
// We send props as numbers if we intend to manipulate than somehow at
// the component code.
export default function CardsGallery() {
  return(
      <div className="cards-gallery">
        <Cards
          img="katie-zafares.jpg"
          rating="5.0"
          reviewCount = {6}
          country = "USA"
          title = "Life lessons with Katie Zaferes"
          price = {123}
        />
      </div>
  )
}
