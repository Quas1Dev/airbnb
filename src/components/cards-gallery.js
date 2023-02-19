import Cards from './cards.js'
import CardsData from './data.js'

// We send props as numbers if we intend to manipulate them somehow at
// the component code.
export default function CardsGallery() {
  const dataArray = CardsData.map(dataObject => <Cards
      key = {dataObject.id}
      // Pass all object's properties as property="value"
      {...dataObject}
    />)

  return (
      <div className="cards-gallery">
        {dataArray}
      </div>
  )
}
