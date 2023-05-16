import it from './InfoItem.module.scss'
function InfoItem(props) {
  const { text } = props;
  return (
    <div className={props.block}>
      <div className={it.ellipse}></div>
      <p>{text}</p>
    </div>
  );
}
 
export default InfoItem;