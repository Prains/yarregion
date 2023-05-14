import '../scss/css/InfoItem.css'
const InfoItem = (props) => {
    return (
      <div>
        <div className={props.block}>
          <div className="ellipse"></div>
          <p>{props.text}</p>
        </div>
      </div>
    );
  };
 
export default InfoItem;