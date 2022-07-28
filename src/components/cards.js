import star from '../images/star.png'
import katie from '../images/katie-zafares.jpg'

export default function Cards(props) {
  return(
    <div className="card">
      <div className="card--component_container">
        <div className="component_container--height">
          <img src={katie} className="card--photo"/>
        </div>
      </div>

      <div className="card--info">
        <div className="info--details">
          <img src={star} className="datails--rating_icon "/>
          <span className="details--rating_num">5.0</span>
          <span className="details--available_units gray">(6)</span>
          <span className="details--country gray">USA</span>
        </div>

        <p className="info--description">Life lessons with Katie Zaferes</p>
        <p className="info--pricing"> <strong>From $136</strong>/ person </p>
      </div>
    </div>
  )
}
