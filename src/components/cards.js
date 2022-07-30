export default function Cards(props) {
  let badgeText
  console.log(props.location)
  if (!props.openSpots) {
    badgeText = "SOULD OUT"
  }else if (props.location === "Online"){
    badgeText = "ONLINE"
  }

  return(
    <div className="card">
    {/* Conditionally display badge */}
      { badgeText && <div className="card-badge">{badgeText}</div> }
      <div className="card--component_container">
        <div className="component_container--height">
          <img src={props.img} className="card--photo"/>
        </div>
      </div>

      <div className="card--info">
        <div className="info--details">
          <img src={props.star} className="datails--rating_icon "/>
          <span className="details--rating_num">{props.rating}</span>
          <span className="details--available_units gray">({props.reviewCount})</span>
          <span className="details--country gray">{props.country}</span>
        </div>

        <p className="info--description">{props.title}</p>
        <p className="info--pricing"> <strong>From ${props.price}</strong>/ person </p>
      </div>
    </div>
  )
}
