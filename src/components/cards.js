import star from '../images/star.png'
import katie from '../images/katie-zafares.jpg'

export default function Cards(props) {
  return(
    <div className="card">
      <div className="card--component_container">
        <div className="component_container--height">
          <img src={`../images/${props.img}`} className="card--photo"/>
        </div>
      </div>

      <div className="card--info">
        <div className="info--details">
          <img src={star} className="datails--rating_icon "/>
          <span className="details--rating_num">{props.rating}</span>
          <span className="details--available_units gray">({props.reviewCount})</span>
          <span className="details--country gray">{props.country}</span>
        </div>

        <p className="info--description">Life lessons with Katie Zaferes</p>
        <p className="info--pricing"> <strong>From ${props.price}</strong>/ person </p>
      </div>
    </div>
  )
}
